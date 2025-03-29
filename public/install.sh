#!/bin/bash

set -e

# Installation directory (hidden in user's home)
INSTALL_DIR="$HOME/.turboclone"
SERVICE_NAME="TurboClone"
AUTOMATOR_DIR="$HOME/Library/Services"
WORKFLOW_PATH="$AUTOMATOR_DIR/$SERVICE_NAME.workflow"

# Check if running in Vercel environment
if [ "$VERCEL_ENV" = "production" ]; then
  # Using BASE_URL from environment
  BASE_URL="https://turboclone.lorenzopalaia.com"
else
  # For development, default to localhost if BASE_URL not set
  BASE_URL="http://localhost:3000"
  echo "🧪 Development mode: using $BASE_URL"
fi

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
curl -sS "$BASE_URL/app/run.py" -o "$INSTALL_DIR/run.py"
chmod +x "$INSTALL_DIR/run.py"

# Download requirements.txt and install dependencies
echo "⬇️  Downloading requirements.txt..."
curl -sS "$BASE_URL/app/requirements.txt" -o "$INSTALL_DIR/requirements.txt"
echo "🔧 Installing dependencies from requirements.txt..."
pip3 install -r "$INSTALL_DIR/requirements.txt" > /dev/null 2>&1
rm -f "$INSTALL_DIR/requirements.txt"

# Create Automator service
echo "⚙️  Setting up macOS context menu service..."

# Remove existing workflow if present
if [ -d "$WORKFLOW_PATH" ]; then
  rm -rf "$WORKFLOW_PATH"
fi

# Create workflow directory structure
mkdir -p "$WORKFLOW_PATH/Contents/QuickLook"

# Download workflow files
echo "⬇️  Downloading workflow files..."
curl -sS "$BASE_URL/app/TurboClone/Contents/document.wflow" -o "$WORKFLOW_PATH/Contents/document.wflow"
curl -sS "$BASE_URL/app/TurboClone/Contents/Info.plist" -o "$WORKFLOW_PATH/Contents/Info.plist"
curl -sS "$BASE_URL/app/TurboClone/Contents/QuickLook/Thumbnail.png" -o "$WORKFLOW_PATH/Contents/QuickLook/Thumbnail.png"

echo "✅ Installation complete! You can now right-click on a folder, desktop or in an open folder area and select '$SERVICE_NAME' to use TurboClone."