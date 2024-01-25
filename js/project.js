document.addEventListener('DOMContentLoaded', fetchProjects);

async function fetchProjects() {
  const container = document.getElementById('project-container');

  try {
    const response = await fetch('https://api.github.com/users/5pace4/repos');
    const projects = await response.json();

    projects.forEach(project => {
      // Check if the project has a description
      if (project.description) {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}

function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const title = document.createElement('h3');
  title.classList.add('project-title');
  title.textContent = project.name;

  const description = document.createElement('p');
  description.classList.add('project-description');
  description.textContent = project.description;

  const link = document.createElement('a');
  link.classList.add('project-link');
  link.href = project.html_url;
  link.target = '_blank';

  const linkIcon = document.createElement('i');
  linkIcon.classList.add('bx', 'bxl-github');

  const linkText = document.createElement('span');
  linkText.textContent = 'View on GitHub';

  link.appendChild(linkIcon);
  link.appendChild(linkText);

  projectCard.appendChild(title);
  projectCard.appendChild(description);
  projectCard.appendChild(link);

  return projectCard;
}
