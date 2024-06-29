document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    fetch('https://api.github.com/users/milind2thakur/repos')
        .then(response => response.json())
        .then(data => {
            const projects = data.filter(repo => !repo.fork); // Filter out forked repositories

            projects.forEach(project => {
                // Fetch README.md content to extract images
                fetch(`https://raw.githubusercontent.com/milind2thakur/${project.name}/main/README.md`)
                    .then(response => response.text())
                    .then(readmeContent => {
                        // Extract first image from README.md (assuming markdown format)
                        const matches = readmeContent.match(/!\[.*?\]\((.*?)\)/); // Regex to find markdown image syntax ![alt-text](image-url)
                        const imageUrl = matches ? matches[1] : null; // Get the URL of the first image if exists

                        const projectDiv = document.createElement('div');
                        projectDiv.classList.add('project');

                        const projectTitle = document.createElement('h3');
                        projectTitle.textContent = project.name;

                        const projectDescription = document.createElement('p');
                        projectDescription.textContent = project.description || 'No description provided.';

                        const projectLink = document.createElement('a');
                        projectLink.href = project.html_url;
                        projectLink.textContent = 'View Project';
                        projectLink.target = '_blank'; // Open link in a new tab

                        if (imageUrl) {
                            const projectImage = document.createElement('img');
                            projectImage.src = imageUrl;
                            projectImage.alt = project.name; // Use project name as alt text
                            projectDiv.appendChild(projectImage);
                        }

                        projectDiv.appendChild(projectTitle);
                        projectDiv.appendChild(projectDescription);
                        projectDiv.appendChild(projectLink);

                        projectsList.appendChild(projectDiv);
                    })
                    .catch(error => {
                        console.error(`Error fetching README.md for ${project.name}:`, error);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub projects:', error);
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Failed to fetch GitHub projects. Please try again later.';
            projectsList.appendChild(errorDiv);
        });
});


document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('small-header');
        } else {
            header.classList.remove('small-header');
        }
    });
});
