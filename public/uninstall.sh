#!/bin/bash

set -e

# Installation directory and service details
INSTALL_DIR="$HOME/.turboclone"
SERVICE_NAME="TurboClone"
WORKFLOW_PATH="$HOME/Library/Services/$SERVICE_NAME.workflow"

echo "🗑️  Uninstalling TurboClone..."

# Remove the automator service workflow
if [ -d "$WORKFLOW_PATH" ]; then
  echo "🔄 Removing macOS service..."
  rm -rf "$WORKFLOW_PATH"
  echo "✅ Service '$SERVICE_NAME' removed."
else
  echo "ℹ️  Service '$SERVICE_NAME' not found."
fi

# Remove the installation directory
if [ -d "$INSTALL_DIR" ]; then
  echo "🔄 Removing application files..."
  rm -rf "$INSTALL_DIR"
  echo "✅ Installation directory removed."
else
  echo "ℹ️  Installation directory not found."
fi

# Note: We don't uninstall Git or remove pip packages to avoid affecting other applications

echo "✅ Uninstallation complete! TurboClone has been removed from your system."