async function fetch_github_content({ userSettings }) {
  const { githubRepo, githubBranch, githubPAT } = userSettings;

  if (!githubRepo || !githubBranch || !githubPAT) {
    return "Error: Missing required settings. Please provide the GitHub repository URL, branch name, and Personal Access Token.";
  }

  // Extract owner and repo name from the URL.
  const urlParts = githubRepo.match(/github\.com\/(.+)\/(.+)/);
  if (!urlParts || urlParts.length < 3) {
    return "Error: Invalid GitHub repository URL. Please use a URL in the format 'https://github.com/user/repo'.";
  }
  const owner = urlParts[1];
  const repo = urlParts[2];

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/?ref=${githubBranch}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${githubPAT}`,
        'Accept': 'application/vnd.github.v3+json' // Recommended by GitHub API
      }
    });

    if (!response.ok) {
      return `Error: GitHub API request failed. Status: ${response.status} - ${response.statusText}`;
    }

    const data = await response.json();

    let allContent = "";

    for (const file of data) {
      if (file.type === 'file' && file.download_url) {
        const fileResponse = await fetch(file.download_url);
        if (fileResponse.ok) {
          const fileContent = await fileResponse.text();
          allContent += `\n\n--- ${file.name} ---\n\n${fileContent}`;
        } else {
          allContent += `\n\n--- ${file.name} ---\n\nError fetching file: ${fileResponse.status} - ${fileResponse.statusText}`;
        }
      }
    }
    return allContent;

  } catch (error) {
    return `Error: Fetching content failed: ${error.message}`;
  }
}
