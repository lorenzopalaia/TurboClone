# ! idea:
# 1. Open cone dialog (input + button)
# 2. Check if clipboard has a github repository URL
# 3. If yes, put it in the input field
# 4. If no, wait for user to input a URL
# 5. Check if the URL is valid
# 6. If valid, clone the repository in the folder from where the script is run
# 7. If invalid, show error message
# 8. Show success message after cloning
# 9. Close the dialog

# Future improvements:
# 1. Add a progress bar to show the cloning progress
# 2. Add an option to choose the branch to clone, done by checking the branches in the repository via the API
# 3. Add a checkbox to choose if the user wants to run "code <repo_name>" after cloning to open the repository in VSCode

import os
import subprocess
import re
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget, QMessageBox, QHBoxLayout


def is_valid_github_url(url):
    """Check if the URL is a valid GitHub repository URL."""
    return bool(re.match(r"https://github\.com/.+/.+", url))


def main():
    app = QApplication(sys.argv)
    window = QMainWindow()
    window.setWindowTitle("TurboClone")
    window.setFixedSize(450, 80)

    # Create central widget and layout
    central_widget = QWidget()
    layout = QVBoxLayout(central_widget)
    layout.setContentsMargins(10, 10, 10, 10)

    # Create a label for the input field
    label = QLabel("Repository URL:")
    layout.addWidget(label)

    # Create horizontal layout for input field and button
    input_layout = QHBoxLayout()
    input_layout.setSpacing(10)  # Add space between input and button
    layout.addLayout(input_layout)

    # Create an input field
    entry = QLineEdit()
    input_layout.addWidget(entry, 4)  # Give the entry field more stretch

    # Check clipboard for GitHub URL and populate input field
    clipboard = app.clipboard()
    clipboard_text = clipboard.text()
    if is_valid_github_url(clipboard_text):
        entry.setText(clipboard_text)

    # Create a button to clone the repository
    clone_button = QPushButton("Clone")
    clone_button.clicked.connect(lambda: clone_repo(entry.text()))
    clone_button.setFixedWidth(80)  # Set fixed width for the button
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


def clone_repo(url):
    # Check if the URL is valid using the shared validation function
    if not is_valid_github_url(url):
        QMessageBox.critical(None, "Error", "Invalid GitHub repository URL")
        return

    # Clone the repository
    try:
        subprocess.run(["git", "clone", url], check=True)
        QMessageBox.information(
            None, "Success", "Repository cloned successfully")
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

    # Check if the script is run from a terminal
    if os.isatty(0):
        main()
    else:
        app = QApplication([])
        QMessageBox.critical(
            None, "Error", "This script must be run from a terminal")
