// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'c5fd8c54b54a8a450f66cf2b7ca51c7ec0460246'
  })
  
  await octokit.request('put /repos/{owner}/{repo}', {
    owner: 'OWNER',
    repo: 'REPO',
    name: 'Hello-World',
    description: 'This is your first repository',
    homepage: 'https://github.com',
    'private': true,
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })