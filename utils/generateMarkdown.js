// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributions
${data.Contributions}
## Tests
${data.Tests}
## Issues
${data.Issues}
## License
${data.License}

## Links
http://github.com/${data.GitHubName}
`;
}

module.exports = generateMarkdown;
