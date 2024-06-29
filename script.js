document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    fetch('https://api.github.com/users/milind2thakur/repos')
        .then(response => response.json())
        .then(data => {
            const projects = data.filter(repo => !repo.fork); // Filter out forked repositories

            projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description || 'No description provided.';

                const projectLink = document.createElement('a');
                projectLink.href = project.html_url;
                projectLink.textContent = 'View Project';

                // Example: Adding an image (replace 'image-url.jpg' with your actual image URL)
                const projectImage = document.createElement('img');
                projectImage.src = 'image-url.jpg'; // Replace with actual image URL or path

                projectDiv.appendChild(projectImage);
                projectDiv.appendChild(projectTitle);
                projectDiv.appendChild(projectDescription);
                projectDiv.appendChild(projectLink);

                projectsList.appendChild(projectDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub projects:', error);
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Failed to fetch GitHub projects. Please try again later.';
            projectsList.appendChild(errorDiv);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    // Replace 'image-url.jpg' with actual URLs or paths to your images
    const projectImages = {
        'project1': 'image-url1.jpg',
        'project2': 'image-url2.jpg',
        // Add more project images as needed
    };

    fetch('https://api.github.com/users/milind2thakur/repos')
        .then(response => response.json())
        .then(data => {
            const projects = data.filter(repo => !repo.fork); // Filter out forked repositories

            projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description || 'No description provided.';

                const projectLink = document.createElement('a');
                projectLink.href = project.html_url;
                projectLink.textContent = 'View Project';

                // Create image element
                const projectImage = document.createElement('img');
                projectImage.src = projectImages[project.name.toLowerCase()] || 'default-image-url.jpg'; // Default image or replace with specific image

                projectDiv.appendChild(projectImage);
                projectDiv.appendChild(projectTitle);
                projectDiv.appendChild(projectDescription);
                projectDiv.appendChild(projectLink);

                projectsList.appendChild(projectDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub projects:', error);
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Failed to fetch GitHub projects. Please try again later.';
            projectsList.appendChild(errorDiv);
        });
});

