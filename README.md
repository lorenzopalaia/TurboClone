# TurboClone

TurboClone is an open-source tool for macOS that simplifies cloning GitHub repositories directly from Finder, eliminating the need for terminal commands.

## Key Features

- **One-Click Cloning**: Right-click any folder in Finder and select TurboClone to instantly clone a GitHub repository.
- **Smart Clipboard Detection**: Copy a GitHub repository URL, and TurboClone will automatically detect it, streamlining the cloning process.
- **Native macOS Integration**: Designed exclusively for Mac, TurboClone integrates seamlessly into your daily workflow.

## Install TurboClone on macOS

**Note**: TurboClone requires Python to be installed on your system. If Git is not present, it will be installed automatically using Homebrew, if available.

1. **Install TurboClone**:

   Open Terminal and run the following command:

   ```sh
   curl -sS https://turboclone.lorenzopalaia.com/install.sh | sh
   ```

   This script installs TurboClone and configures the necessary Finder integration. Ensure that Python is already installed on your system.

2. **Copy the GitHub Repository URL**:

   Visit a GitHub repository and copy its URL. TurboClone will automatically detect it from your clipboard.

3. **Clone with a Right-Click**:

   Right-click on any folder in Finder and select "TurboClone" from the context menu. If you've copied a GitHub URL, the cloning will start immediately; otherwise, you'll be prompted to enter a repository URL.

## Uninstallation

To remove TurboClone from your system, run the following command in Terminal:

```sh
curl -sS https://turboclone.lorenzopalaia.com/uninstall.sh | sh
```

This script will safely remove all TurboClone components, including the Finder service and installed scripts.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push your branch:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request on GitHub.

### Install and Run Locally

To set up the TurboClone project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/lorenzopalaia/turboclone.git
   cd turboclone
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:3000/`.

## License

This project is licensed under the MIT License.

For more information and to download TurboClone, visit the [official website](https://turboclone.lorenzopalaia.com/).
