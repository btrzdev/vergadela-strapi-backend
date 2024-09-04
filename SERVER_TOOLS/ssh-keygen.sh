#!/bin/sh

# Generate a new ssh key
# You will be prompted to enter a file in which to save the key,
# a passphrase, and a passphrase confirmation
ssh-keygen -f ~/.ssh/boost_rsa

# Check if ssh-copy-id is available
if command -v ssh-copy-id >/dev/null; then
    # Use ssh-copy-id if available (Linux)
    ssh-copy-id backends@185.118.113.18
else
    # If not, use this alternative (macOS and Git Bash on Windows)
    cat ~/.ssh/boost_rsa.pub | ssh backends@185.118.113.18 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >>  ~/.ssh/authorized_keys"
fi
