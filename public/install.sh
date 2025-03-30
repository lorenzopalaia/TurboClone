#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
INSTALL_DIR="$HOME/.turboclone"
SERVICE_NAME="TurboClone"
AUTOMATOR_DIR="$HOME/Library/Services"
WORKFLOW_PATH="$AUTOMATOR_DIR/$SERVICE_NAME.workflow"

if [ -n "$VERCEL" ]; then
  echo "Vercel environment detected. Using BASE_URL from environment variable."
else
  echo "Local environment detected. Using BASE_URL from .env.local file."
  if [ -f "$PROJECT_ROOT/.env.local" ]; then
    set -a
    source "$PROJECT_ROOT/.env.local"
    set +a
    BASE_URL="$LOCAL_URL"
  else
    echo "⚠️  .env.local file not found. Please create it with the BASE_URL variable."
    exit 1
  fi
fi
echo "BASE_URL: $BASE_URL"

echo "🚀 Installing TurboClone..."

if ! command -v brew &> /dev/null; then
  echo "⚠️  Homebrew non trovato. Installalo prima di procedere: https://brew.sh"
  exit 1
fi

if ! command -v git &> /dev/null; then
  echo "🔧 Installing Git..."
  brew install git
fi

mkdir -p "$INSTALL_DIR"

echo "⬇️  Downloading run.py..."
curl -sS "$BASE_URL/app/run.py" -o "$INSTALL_DIR/run.py"
chmod +x "$INSTALL_DIR/run.py"

echo "⬇️  Downloading requirements.txt..."
curl -sS "$BASE_URL/app/requirements.txt" -o "$INSTALL_DIR/requirements.txt"
echo "🔧 Installing dependencies from requirements.txt..."
pip3 install -r "$INSTALL_DIR/requirements.txt" > /dev/null 2>&1
rm -f "$INSTALL_DIR/requirements.txt"

echo "⚙️  Setting up macOS context menu service..."

if [ -d "$WORKFLOW_PATH" ]; then
  rm -rf "$WORKFLOW_PATH"
fi

mkdir -p "$WORKFLOW_PATH/Contents/QuickLook"

echo "⬇️  Downloading workflow files..."
curl -sS "$BASE_URL/app/TurboClone/Contents/document.wflow" -o "$WORKFLOW_PATH/Contents/document.wflow"
curl -sS "$BASE_URL/app/TurboClone/Contents/Info.plist" -o "$WORKFLOW_PATH/Contents/Info.plist"
curl -sS "$BASE_URL/app/TurboClone/Contents/QuickLook/Thumbnail.png" -o "$WORKFLOW_PATH/Contents/QuickLook/Thumbnail.png"

echo "✅ Installation complete! You can now right-click on a folder, desktop or in an open folder area and select '$SERVICE_NAME' to use TurboClone."
