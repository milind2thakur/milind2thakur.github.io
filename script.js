// Function to fetch repositories from GitHub API
async function fetchRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

// Function to display repositories on the webpage
function displayRepositories(repositories) {
    const projectsList = document.getElementById('projects-list');
    
    repositories.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project');

        const title = document.createElement('h3');
        title.textContent = repo.name;

        const description = document.createElement('p');
        description.textContent = repo.description || 'No description provided';

        const link = document.createElement('a');
        link.href = repo.html_url;
        link.textContent = 'View on GitHub';
        link.target = '_blank';

        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);

        projectsList.appendChild(projectCard);
    });
}

// Usage example: Replace 'milind2thakur' with the GitHub username you want to fetch repositories from
const username = 'milind2thakur';
fetchRepositories(username)
    .then(repositories => {
        displayRepositories(repositories);
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
    });
