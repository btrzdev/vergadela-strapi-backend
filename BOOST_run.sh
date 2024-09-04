#!/bin/bash

# Define the script filenames
ssh_keygen="SERVER_TOOLS/ssh-keygen.sh"
sync_and_deploy_pm2="SERVER_TOOLS/sync_and_deploy_2_prod_remote_pm2.sh"

# Display the menu
echo "BOOST CI Tool - (C) 2024"
echo " "
echo "Menu:"
echo "1. Generate SSH Key"
echo "2. Sync and deploy PM2"
echo " "
read -p "Select an option (1 to 2) Ctrl+C to exit: " option
echo " "
echo "//////////////////////////////////////////////////"
echo " "

# Check the selected option
case $option in
    1)
        echo "SSH Keygen..."
        chmod +x "$ssh_keygen"
        ./"$ssh_keygen"
        ;;
    2)
        echo "Sync and deploy PM2 ..."
        chmod +x "$sync_and_deploy_pm2"
        ./"$sync_and_deploy_pm2"
        ;;
    *)
        echo "Invalid option. Please select a valid option."
        ;;
esac
