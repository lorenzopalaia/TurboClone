#!/usr/bin/env python3
import os
import subprocess
import re
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget, QMessageBox, QHBoxLayout, QCheckBox
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
        return False, None

    try:
        process = subprocess.run(
            ["git", "clone", url], cwd=target_directory, check=True, capture_output=True, text=True)

        # Extract repo name from output to determine the path
        output = process.stdout if process.stdout else process.stderr
        repo_path = None

        # Find the repository name from the git output
        if "Cloning into" in output:
            match = re.search(r"Cloning into ['\"](.+?)['\"]", output)
            if match:
                repo_name = match.group(1)
                repo_path = os.path.join(target_directory, repo_name)

        # If we can't extract from output, try to determine from URL
        if not repo_path:
            repo_name = url.strip().rstrip("/").rstrip(".git").split("/")[-1]
            repo_path = os.path.join(target_directory, repo_name)

        return True, repo_path
    except subprocess.CalledProcessError:
        QMessageBox.critical(None, "Error", "Failed to clone the repository")
        return False, None


def open_in_vscode(repo_path):
    try:
        subprocess.Popen(["code", repo_path])
    except FileNotFoundError:
        QMessageBox.warning(
            None, "Warning", "VS Code command line tool not found. Repository cloned but couldn't open in VS Code.")


def main(target_directory=None):
    # Get the directory where to clone
    clone_dir = target_directory or os.getcwd()

    app = QApplication(sys.argv)

    # Check clipboard for Git URL
    clipboard = app.clipboard()
    clipboard_text = clipboard.text()

    # If clipboard contains valid Git URL, show minimal GUI to confirm
    if is_valid_git_url(clipboard_text):
        # Create minimal window for clipboard URL
        window = QMainWindow()
        window.setWindowTitle("TurboClone")
        window.setFixedSize(450, 130)

        central_widget = QWidget()
        layout = QVBoxLayout(central_widget)
        layout.setContentsMargins(10, 10, 10, 10)

        # Show detected URL
        layout.addWidget(QLabel("Detected repository URL:"))
        url_label = QLabel(clipboard_text)
        url_label.setStyleSheet("font-weight: bold;")
        layout.addWidget(url_label)

        # Add checkbox for VS Code
        open_vscode_checkbox = QCheckBox("Open in VS Code after cloning")
        open_vscode_checkbox.setChecked(True)
        layout.addWidget(open_vscode_checkbox)

        # Button layout
        button_layout = QHBoxLayout()
        layout.addLayout(button_layout)

        clone_button = QPushButton("Clone")
        cancel_button = QPushButton("Cancel")

        button_layout.addWidget(cancel_button)
        button_layout.addWidget(clone_button)

        clone_button.clicked.connect(
            lambda: clone_and_exit(clipboard_text, clone_dir, open_vscode_checkbox.isChecked()))
        cancel_button.clicked.connect(
            lambda: QApplication.instance().quit())

        window.setCentralWidget(central_widget)
        window.setGeometry(
            QApplication.desktop().screenGeometry().width() // 2 - 225,
            QApplication.desktop().screenGeometry().height() // 2 - 65,
            450, 130
        )

        window.show()
        sys.exit(app.exec_())

    # Otherwise, show the full GUI
    window = QMainWindow()
    window.setWindowTitle("TurboClone")
    window.setFixedSize(450, 130)

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

    # Add widgets to horizontal layout
    input_layout.addWidget(entry)
    input_layout.addWidget(clone_button)

    # Add checkbox for opening in VS Code
    open_vscode_checkbox = QCheckBox("Open in VS Code after cloning")
    open_vscode_checkbox.setChecked(True)
    layout.addWidget(open_vscode_checkbox)

    clone_button.clicked.connect(
        lambda: clone_and_exit(entry.text(), clone_dir, open_vscode_checkbox.isChecked()))

    # Set the central widget and center the window
    window.setCentralWidget(central_widget)
    window.setGeometry(
        QApplication.desktop().screenGeometry().width() // 2 - 225,
        QApplication.desktop().screenGeometry().height() // 2 - 65,
        450, 130
    )

    window.show()
    sys.exit(app.exec_())


def clone_and_exit(url, target_directory, open_in_vscode_after=False):
    success, repo_path = clone_repo(url, target_directory)
    if success:
        if open_in_vscode_after and repo_path:
            open_in_vscode(repo_path)
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
