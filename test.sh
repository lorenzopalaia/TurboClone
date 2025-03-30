#!/bin/bash
# Function to terminate the server in case of interruption
cleanup() {
  echo "Terminating server..."
  kill $SERVER_PID
  exit
}
trap cleanup SIGINT SIGTERM

# Check if .next directory exists
if [ ! -d ".next/server/app" ]; then
  echo "No build found. Running 'npm run build'..."
  npm run build
else
  echo "Build already present in .next. Skipping build phase."
fi

# Start the server in the background and save the PID
npm run start &
SERVER_PID=$!

echo "Starting server (PID: $SERVER_PID). Waiting for it to become available at http://localhost:3000..."

# Wait until the server responds (check with curl)
until curl --output /dev/null --silent --head --fail http://localhost:3000; do
  sleep 1
done

echo "Server available. Running installation and uninstallation scripts..."

# Run installation script
sh ./public/install.sh

# Run uninstallation script
sh ./public/uninstall.sh

# Terminate the server
cleanup
