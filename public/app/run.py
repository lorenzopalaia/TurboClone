#!/usr/bin/env python3
import os
import subprocess
import re
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget, QMessageBox, QHBoxLayout
from PyQt5.QtCore import Qt


def is_valid_github_url(url):
    """Check if the URL is a valid GitHub repository URL."""
    return bool(re.match(r"https://github\.com/.+/.+", url))


def main(target_directory=None):
    # Get the directory where to clone
    clone_dir = target_directory or os.getcwd()

    app = QApplication(sys.argv)
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
    # Check clipboard for GitHub URL
    clipboard = app.clipboard()
    clipboard_text = clipboard.text()
    if is_valid_github_url(clipboard_text):
        entry.setText(clipboard_text)

    # Create a button with same height as input field
    clone_button = QPushButton("Clone")
    clone_button.clicked.connect(lambda: clone_repo(entry.text(), clone_dir))

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


def clone_repo(url, target_directory):
    if not is_valid_github_url(url):
        QMessageBox.critical(None, "Error", "Invalid GitHub repository URL")
        return

    try:
        subprocess.run(["git", "clone", url], cwd=target_directory, check=True)
        QMessageBox.information(
            None, "Success", "Repository cloned successfully")
        QApplication.instance().quit()
    except subprocess.CalledProcessError:
        QMessageBox.critical(None, "Error", "Failed to clone the repository")


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
