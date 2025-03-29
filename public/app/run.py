#!/usr/bin/env python3
import os
import subprocess
import re
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget, QMessageBox, QHBoxLayout
from PyQt5.QtCore import Qt


def is_valid_git_url(url):
    """Check if the URL is a valid Git repository URL from common providers."""
    patterns = [
        # GitHub
        r"https?://github\.com/[^/]+/[^/]+(?:\.git)?$",
        # GitLab
        r"https?://gitlab\.com/[^/]+/[^/]+(?:\.git)?$",
        # Bitbucket
        r"https?://bitbucket\.org/[^/]+/[^/]+(?:\.git)?$",
        # Azure DevOps
        r"https?://dev\.azure\.com/[^/]+/[^/]+/_git/[^/]+$",
        # Generic Git over HTTP(S)
        r"https?://[^/]+/.*\.git$",
        # SSH URLs
        r"git@(?:github|gitlab|bitbucket)\.(?:com|org):[^/]+/[^/]+(?:\.git)?$",
        r"ssh://git@[^/]+/[^/]+/[^/]+(?:\.git)?$"
    ]

    for pattern in patterns:
        if re.match(pattern, url):
            return True

    return False


def clone_repo(url, target_directory):
    if not is_valid_git_url(url):
        QMessageBox.critical(None, "Error", "Invalid Git repository URL")
        return False

    try:
        subprocess.run(["git", "clone", url], cwd=target_directory, check=True)
        return True
    except subprocess.CalledProcessError:
        QMessageBox.critical(None, "Error", "Failed to clone the repository")
        return False


def main(target_directory=None):
    # Get the directory where to clone
    clone_dir = target_directory or os.getcwd()

    app = QApplication(sys.argv)

    # Check clipboard for Git URL
    clipboard = app.clipboard()
    clipboard_text = clipboard.text()

    # If clipboard contains valid Git URL, clone it directly and exit
    if is_valid_git_url(clipboard_text):
        success = clone_repo(clipboard_text, clone_dir)
        sys.exit(0 if success else 1)

    # Otherwise, show the GUI
    window = QMainWindow()
    window.setWindowTitle("TurboClone")
    window.setFixedSize(450, 100)

    # Create central widget and layout
    central_widget = QWidget()
    layout = QVBoxLayout(central_widget)
    layout.setContentsMargins(10, 10, 10, 10)

    # Create a label for the input field
    layout.addWidget(QLabel("Repository URL:"))

    # Create horizontal layout for input and button
    input_layout = QHBoxLayout()
    layout.addLayout(input_layout)

    # Create an input field
    entry = QLineEdit()
    entry.setFocusPolicy(Qt.ClickFocus)

    # Create a button with same height as input field
    clone_button = QPushButton("Clone")
    clone_button.clicked.connect(
        lambda: clone_and_exit(entry.text(), clone_dir))

    # Add widgets to horizontal layout
    input_layout.addWidget(entry)
    input_layout.addWidget(clone_button)

    # Set the central widget and center the window
    window.setCentralWidget(central_widget)
    window.setGeometry(
        QApplication.desktop().screenGeometry().width() // 2 - 225,
        QApplication.desktop().screenGeometry().height() // 2 - 50,
        450, 100
    )

    window.show()
    sys.exit(app.exec_())


def clone_and_exit(url, target_directory):
    success = clone_repo(url, target_directory)
    if success:
        QApplication.instance().quit()


if __name__ == "__main__":
    # Check if git is installed
    try:
        subprocess.run(["git", "--version"], check=True)
    except subprocess.CalledProcessError:
        app = QApplication([])
        QMessageBox.critical(None, "Error", "Git is not installed")
        sys.exit(1)

    # Get target directory from arguments
    target_directory = None
    if len(sys.argv) > 1:
        target_directory = sys.argv[1]
        if os.path.isfile(target_directory):
            target_directory = os.path.dirname(target_directory)

    main(target_directory)
