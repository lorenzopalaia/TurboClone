#!/usr/bin/env python3
import os
import subprocess
import re
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget, QMessageBox, QHBoxLayout


def is_valid_github_url(url):
    """Check if the URL is a valid GitHub repository URL."""
    return bool(re.match(r"https://github\.com/.+/.+", url))


def main(target_directory=None):
    # Get the directory where to clone - use the target_directory or fallback to current directory
    clone_dir = target_directory or os.getcwd()

    app = QApplication(sys.argv)
    window = QMainWindow()
    window.setWindowTitle("TurboClone")
    # Made a bit taller to fit the directory display
    window.setFixedSize(450, 100)

    # Create central widget and layout
    central_widget = QWidget()
    layout = QVBoxLayout(central_widget)
    layout.setContentsMargins(10, 10, 10, 10)

    # Create a label for the input field
    label = QLabel("Repository URL:")
    layout.addWidget(label)

    # Create horizontal layout for input field and button
    input_layout = QHBoxLayout()
    input_layout.setSpacing(10)
    layout.addLayout(input_layout)

    # Create an input field
    entry = QLineEdit()
    input_layout.addWidget(entry, 4)

    # Check clipboard for GitHub URL and populate input field
    clipboard = app.clipboard()
    clipboard_text = clipboard.text()
    if is_valid_github_url(clipboard_text):
        entry.setText(clipboard_text)

    # Add a label to show where the repo will be cloned
    dir_label = QLabel(f"Will clone to: {clone_dir}")
    layout.addWidget(dir_label)

    # Create a button to clone the repository
    clone_button = QPushButton("Clone")
    clone_button.clicked.connect(lambda: clone_repo(entry.text(), clone_dir))
    clone_button.setFixedWidth(80)
    input_layout.addWidget(clone_button, 1)

    # Set the central widget
    window.setCentralWidget(central_widget)

    # Center the window
    screen_geometry = app.desktop().availableGeometry()
    x = (screen_geometry.width() - window.width()) // 2
    y = (screen_geometry.height() - window.height()) // 2
    window.move(x, y)

    window.show()
    sys.exit(app.exec_())


def clone_repo(url, target_directory):
    # Check if the URL is valid using the shared validation function
    if not is_valid_github_url(url):
        QMessageBox.critical(None, "Error", "Invalid GitHub repository URL")
        return

    # Clone the repository into the target directory
    try:
        subprocess.run(["git", "clone", url], cwd=target_directory, check=True)
        QMessageBox.information(
            None, "Success", "Repository cloned successfully")
        app = QApplication.instance()
        app.quit()
    except subprocess.CalledProcessError:
        QMessageBox.critical(None, "Error", "Failed to clone the repository")


if __name__ == "__main__":
    # Check if git is installed
    try:
        subprocess.run(["git", "--version"], check=True)
    except subprocess.CalledProcessError:
        app = QApplication([])
        QMessageBox.critical(None, "Error", "Git is not installed")
        exit(1)

    # When run as a service/context menu item, macOS passes the directory path as an argument
    target_directory = None
    if len(sys.argv) > 1:
        target_directory = sys.argv[1]
        if os.path.isfile(target_directory):
            # If the path is to a file, use its parent directory
            target_directory = os.path.dirname(target_directory)

    main(target_directory)
