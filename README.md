# Language Transfer Fetcher - TypingMind Plugin

This plugin for TypingMind fetches content from a specified GitHub repository, primarily intended for accessing course materials from Language Transfer. It operates automatically based on the configured user settings, displaying the fetched content directly within your TypingMind chat.

## How it Works

The Language Transfer Fetcher plugin doesn't use traditional chat commands. Instead, it works by:

1.  **Fetching Files:** Once configured (see Installation and Configuration below), the plugin automatically fetches *all* files from the specified GitHub repository and branch.
2.  **Displaying Content:** It then displays the content of these files directly in your TypingMind chat. The output is formatted as plain text, with each file's content separated by a header indicating the filename.
3.  **Automatic Updates?** There is no refresh.

There are no specific commands to type into the chat. The plugin's output is generated automatically after it's been installed and configured.

## Installation and Configuration (for TypingMind)

1.  **Generate a GitHub Personal Access Token:**
    *   Go to your GitHub account settings.
    *   Navigate to **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**.
    *   Click **Generate new token (classic)**.
    *   Give the token a descriptive name (e.g., "TypingMind Language Transfer").
    *   Select the **repo** scope.  This grants access to read repository content.  *Do not select any other scopes unless you have a specific reason to do so*.
    *   Click **Generate token**.
    *   **Important:** Copy the generated token immediately. You won't be able to see it again.

2.  **Import the Plugin:**
    *  Within TypingMind, use the "Import from URL" feature to import the plugin directly from this GitHub Repository.
    * The URL to import is:
    ```
    https://github.com/YOUR_GITHUB_USERNAME/language-transfer-fetcher
     ```
     **Replace "YOUR_GITHUB_USERNAME" with your actual GitHub username**

3.  **Configure Settings:**
    *   After importing, go to the plugin's settings within TypingMind.
    *   Enter the following:
        *   **GitHub Repository URL:** The full URL of the Language Transfer repository (e.g., `https://github.com/languagetransfer/spanish`).
        *   **GitHub Branch Name:** Usually `main`.
        *   **GitHub Personal Access Token:** Paste the token you generated.

## Example Output

The plugin's output will appear in the chat and will look something like this (assuming you've configured it to fetch from a repository containing files named `file1.txt` and `file2.md`):
