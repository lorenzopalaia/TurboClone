#!/bin/bash

set -e

# Installation directory (hidden in user's home)
INSTALL_DIR="$HOME/.turboclone"
SERVICE_NAME="TurboClone"
AUTOMATOR_DIR="$HOME/Library/Services"
WORKFLOW_PATH="$AUTOMATOR_DIR/$SERVICE_NAME.workflow"
BASE_URL="https://turboclone.lorenzopalaia.com"

echo "🚀 Installing TurboClone..."

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
  echo "⚠️  Homebrew not found. Install it before proceeding: https://brew.sh"
  exit 1
fi

# Install Git if it's not installed
if ! command -v git &> /dev/null; then
  echo "🔧 Installing Git..."
  brew install git
fi

# Create installation directory
mkdir -p "$INSTALL_DIR"

# Download run.py from website
echo "⬇️  Downloading run.py..."
curl -sS "$BASE_URL/run.py" -o "$INSTALL_DIR/run.py"
chmod +x "$INSTALL_DIR/run.py"

# Download requirements.txt and install dependencies
echo "⬇️  Downloading requirements.txt..."
curl -sS "$BASE_URL/requirements.txt" -o "$INSTALL_DIR/requirements.txt"
echo "🔧 Installing dependencies from requirements.txt..."
pip3 install -r "$INSTALL_DIR/requirements.txt" > /dev/null 2>&1

# Create Automator service
echo "⚙️  Setting up macOS context menu service..."

# Remove existing workflow if present
if [ -d "$WORKFLOW_PATH" ]; then
  rm -rf "$WORKFLOW_PATH"
fi

# Create workflow directory structure
mkdir -p "$WORKFLOW_PATH/Contents"

# Download the workflow file
echo "⬇️  Downloading workflow file..."
curl -sS "$BASE_URL/workflow.plist" -o "$WORKFLOW_PATH/Contents/document.wflow"

echo "✅ Installation complete! You can now right-click on a folder, desktop or in an open folder area and select '$SERVICE_NAME' to use TurboClone."
