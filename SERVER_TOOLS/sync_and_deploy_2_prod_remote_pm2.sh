#!/bin/bash

# Prompt the user for the sudo password
echo "Enter sudo password for remote user:"
read -s sudo_password

# Define source directory and remote destination
source_dir="./"
remote_user="backends"
remote_host="185.118.113.18"
remote_dir="/home/backends/vergadela-strapi"


# SSH connection and command execution
ssh -T "$remote_user@$remote_host" <<EOF
echo '$sudo_password' | sudo -S pm2 list
EOF

echo "Enter PM2 instance id:"
read pm2id

# Exclude files and directories
exclude_list=( ".gitignore" "README.md" "./node_modules" "./ssl" "./.VSCodeCounter" "./.git" )

# Create a temporary archive excluding specified files
tar_cmd="tar --exclude=${exclude_list[0]} --exclude=${exclude_list[1]}"

for item in "${exclude_list[@]:2}"; do
  tar_cmd="${tar_cmd} --exclude=${item}"
done

tar_cmd="${tar_cmd} -cf - ${source_dir} | gzip -c"

# Use ssh to copy the archive to the remote machine and extract it
ssh_cmd="ssh ${remote_user}@${remote_host} 'mkdir -p ${remote_dir} && cd ${remote_dir} && tar -zxvf -'"

# Execute the commands
eval $tar_cmd | eval $ssh_cmd

# SSH connection and command execution
ssh -T "$remote_user@$remote_host" <<EOF
echo '$sudo_password' | sudo -S pm2 restart '$pm2id'
EOF

# Close the SSH connection
ssh -T "$remote_user@$remote_host" "exit"
