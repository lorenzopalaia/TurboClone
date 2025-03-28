#!/bin/bash

set -e

# Installation directory (hidden in user's home)
INSTALL_DIR="$HOME/.turboclone"
SERVICE_NAME="TurboClone"
AUTOMATOR_DIR="$HOME/Library/Services"
WORKFLOW_PATH="$AUTOMATOR_DIR/$SERVICE_NAME.workflow"

echo "🚀 Installing TurboClone (test) using local files..."

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

# Copy run.py from local folder
if [ ! -f "run.py" ]; then
  echo "❌ run.py not found in current directory."
  exit 1
fi
echo "⬇️  Copying run.py..."
cp run.py "$INSTALL_DIR/run.py"
chmod +x "$INSTALL_DIR/run.py"

# Copy requirements.txt from local folder and install dependencies
if [ ! -f "requirements.txt" ]; then
  echo "❌ requirements.txt not found in current directory."
  exit 1
fi
echo "⬇️  Copying requirements.txt..."
cp requirements.txt "$INSTALL_DIR/requirements.txt"
echo "🔧 Installing dependencies from requirements.txt..."
pip3 install -r "$INSTALL_DIR/requirements.txt" > /dev/null 2>&1

# Copy Automator workflow from current directory to services folder
echo "⚙️  Setting up macOS context menu service..."
if [ ! -d "TurboClone.workflow" ]; then
  echo "❌ TurboClone.workflow not found in current directory."
  exit 1
fi

# Remove existing workflow if present
if [ -d "$WORKFLOW_PATH" ]; then
  rm -rf "$WORKFLOW_PATH"
fi

# Copy workflow to services folder
cp -r "TurboClone.workflow" "$WORKFLOW_PATH"

echo "✅ Installation complete! You can now right-click on a folder, desktop or in an open folder area and select '$SERVICE_NAME' to use TurboClone."
