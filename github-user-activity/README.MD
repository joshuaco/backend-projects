# GitHub User Activity CLI

A simple command-line interface (CLI) tool that fetches and displays a GitHub user's recent activity using the GitHub API.

## Project Description

This CLI application allows you to view the recent activity of any GitHub user directly in your terminal. It fetches data from the GitHub API and displays events like commits, pull requests, stars, forks, and more in a clean, readable format.

**Project challenge by:** [roadmap.sh GitHub User Activity Project](https://roadmap.sh/projects/github-user-activity)

## Features

- Fetch recent activity for any GitHub user
- Display activity in a clean, organized format
- Support for multiple event types:
  - Push events (commits)
  - Pull requests
  - Stars/Watch events
  - Repository creation
  - Forks
  - Issues
  - Comments
- Error handling for invalid usernames and API failures
- No external dependencies required

## Prerequisites

- Node.js (version 14 or higher)
- Internet connection to access GitHub API

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd github-user-activity
   ```

## Usage

Run the CLI tool with a GitHub username as an argument:

```bash
node index.js <username>
```

### Examples

```bash
# View activity for user 'octocat'
node index.js octocat

# View activity for user 'torvalds'
node index.js torvalds
```

### Sample Output

```
- Pushed 3 commits to octocat/Hello-World
- Starred microsoft/vscode
- Forked facebook/react
- Pull request to kubernetes/kubernetes
- Created octocat/new-repo
- Commented on nodejs/node
```

## Error Handling

The application handles common errors gracefully:

- **Missing username**: Displays a helpful message when no username is provided
- **Invalid username**: Shows an error if the user doesn't exist
- **API failures**: Catches and displays network-related errors

## API Information

This tool uses the GitHub Events API endpoint:

```
https://api.github.com/users/<username>/events
```

No authentication is required, but the GitHub API has rate limits for unauthenticated requests (60 requests per hour per IP address).

## Contributing

Feel free to fork this project and submit pull requests for improvements or additional features.

## License

This project is open source and available under the MIT License.
