# Language Transfer Fetcher - TypingMind Plugin

This plugin for TypingMind fetches content from a specified GitHub repository, primarily intended for accessing course materials from Language Transfer.

## Installation

1.  **Generate a GitHub Personal Access Token:**

    - Go to your GitHub account settings.
    - Navigate to **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**.
    - Click **Generate new token (classic)**.
    - Give the token a descriptive name (e.g., "TypingMind Language Transfer").
    - Select the **repo** scope. This grants access to read repository content. _Do not select any other scopes unless you have a specific reason to do so_.
    - Click **Generate token**.
    - **Important:** Copy the generated token immediately. You won't be able to see it again.

2.  **Obtain the Plugin Files:**

    - You should have two files: `plugin.json` and `implementation.js`. These files define the plugin.

3.  **Zip the Files:**

- Create a new ZIP archive (e.g., `language_transfer_fetcher.zip`).
- Add _both_ the `plugin.json` and `implementation.js` files to this ZIP archive. The files should be at the _root_ of the archive, not inside a subdirectory.

4.  **Import into TypingMind:**
    - Open TypingMind.
    - Go to the "Plugins" section (usually in Settings or Preferences).
    - Look for an option to "Import Plugin" or "Install from ZIP".
    - Select the `language_transfer_fetcher.zip` file you created.
    - TypingMind should import the plugin.

## Configuration

After importing the plugin, you need to configure it with your GitHub repository details and Personal Access Token:

1.  **Find the Plugin Settings:**

    - In TypingMind, locate the "Language Transfer Fetcher" plugin in your list of installed plugins.
    - There should be a "Settings" or "Configure" option.

2.  **Enter Settings:**

    - **GitHub Repository URL:** Enter the full URL of the GitHub repository you want to fetch content from (e.g., `https://github.com/languagetransfer/spanish`).
    - **GitHub Branch Name:** Enter the name of the branch you want to use (usually `main` or `master`).
    - **GitHub Personal Access Token:** Paste the Personal Access Token you generated earlier.

3.  **Save Settings:** Make sure to save the settings within TypingMind.

## Usage

Once the plugin is installed and configured, you can use it in your TypingMind chats:

1.  **Start a New Chat:** Create a new chat or use an existing one.
2.  Select the plugin: Click on the plugin selection, usually a `+` icon.
3.  **Trigger the Plugin:** The plugin currently runs automatically based on the settings, fetching _all_ files from the specified repository and branch. There are no specific input parameters to provide directly in the chat. The output will appear directly within the typing mind chat.

## Troubleshooting

- **"Error: Missing required settings..."**: Make sure you've entered the GitHub repository URL, branch name, and Personal Access Token in the plugin settings.
- **"Error: Invalid GitHub repository URL..."**: Double-check the format of the repository URL. It should be `https://github.com/user/repo`.
- **"Error: GitHub API request failed..."**:
  - Verify that your Personal Access Token is correct and has the `repo` scope.
  - Check if the repository exists and is accessible (public or you have access).
  - Ensure the branch name is correct.
  - GitHub's API might be temporarily unavailable.
- **"Error: Fetching content failed..."**: This usually indicates a network problem or an issue with the GitHub API.

## Notes

- This plugin currently fetches _all_ files from the specified repository and branch. Future versions might allow selecting specific files or folders.
- The content is displayed as plain text.
- The plugin is designed for read-only access to public GitHub repositories.
- Ensure to securely store your personal access token.
