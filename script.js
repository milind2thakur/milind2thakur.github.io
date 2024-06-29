document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of your first project.',
            link: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Project 2',
            description: 'Description of your second project.',
            link: 'https://github.com/yourusername/project2'
        },
        // Add more projects as needed
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        projectsList.appendChild(projectDiv);
    });
});
