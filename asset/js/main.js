document.addEventListener("DOMContentLoaded", function () {
  // Check for user's dark mode preference in local storage
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  const modeToggle = document.getElementById("modeToggle");

  // Set initial dark mode state
  if (isDarkMode) {
      document.body.classList.add("dark-mode");
      modeToggle.checked = true;
  }

  // Toggle dark mode on switch change
  modeToggle.addEventListener("change", function () {
      if (modeToggle.checked) {
          enableDarkMode();
      } else {
          disableDarkMode();
      }
  });

  // Function to enable dark mode
  function enableDarkMode() {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
  }

  // Function to disable dark mode
  function disableDarkMode() {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", null);
  }
});



  

  document.addEventListener('DOMContentLoaded', function () {
    const roles = ["Problem Solver", "Competitive Programmer", "Fullstack Developer"];
    const name = "Tofayel Ahmmed Babu";
    let currentRoleIndex = 0;
    const roleElement = document.getElementById('dynamicRole');
    const nameElement = document.querySelector('.name');
    const introTextElement = document.getElementById('introText');
    let currentCharIndex = 0;
  
    function typeText(element, text, callback) {
      const textArray = text.split('');
      let currentIndex = 0;
  
      function type() {
        if (currentIndex < textArray.length) {
          element.textContent += textArray[currentIndex];
          currentIndex++;
          setTimeout(type, 100);
        } else {
          callback();
        }
      }
  
      type();
    }
  
    typeText(nameElement, name, function () {
      typeText(roleElement, roles[0], function () {
        setTimeout(updateRole, 2000); // Wait for 2 seconds before moving to the next role
      });
    });
  
    function updateRole() {
      const currentRole = roles[currentRoleIndex];
      roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
  
      if (currentCharIndex < currentRole.length) {
        currentCharIndex++;
        setTimeout(updateRole, 100);
      } else {
        setTimeout(() => {
          currentCharIndex = 0;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          roleElement.textContent = ''; // Clear the role text after completing the typing animation
          setTimeout(updateRole, 2000); // Wait for 2 seconds before moving to the next role
        }, 2000); // Wait for 2 seconds after completing the typing animation
      }
    }
  });

  
  // Add this JavaScript code to your existing script.js
function showOverlay(index) {
    const overlay = document.querySelectorAll('.card-overlay')[index - 1];
    overlay.style.opacity = '1';
  }
  
  function hideOverlay(index) {
    const overlay = document.querySelectorAll('.card-overlay')[index - 1];
    overlay.style.opacity = '0';
  }
  



// Add this JavaScript code to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // GitHub API endpoint for fetching repositories
    const githubAPI = 'https://api.github.com/TofayelAhmmedbBabu/repos';
  
    // Function to fetch GitHub repositories
    async function fetchProjects() {
      try {
        const response = await fetch(githubAPI);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        return [];
      }
    }
  
    // Function to dynamically generate project cards
    function generateProjectCards(projects) {
      const projectCardsContainer = document.getElementById('projectCardsContainer');
  
      projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <img src="/path/to/default-image.jpg" alt="${project.name}">
          <div class="card-overlay">
            <a href="${project.html_url}" target="_blank">GitHub Repo</a>
          </div>
        `;
        projectCardsContainer.appendChild(card);
      });
    }
  
    // Fetch GitHub repositories and generate project cards
    fetchProjects().then((projects) => {
      generateProjectCards(projects);
    });
  });
  
  

  //------------------------------------ for Projects Section -------------------------
// JavaScript for Projects Section
document.addEventListener('DOMContentLoaded', fetchProjects);

async function fetchProjects() {
  const container = document.getElementById('project-container');

  try {
    const response = await fetch('https://api.github.com/users/TofayelAhmmedBabu/repos');
    const projects = await response.json();

    projects.forEach(project => {
      const projectCard = createProjectCard(project);
      container.appendChild(projectCard);
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
  description.textContent = project.description || 'No description provided.';

  const link = document.createElement('a');
  link.classList.add('project-link');
  link.href = project.html_url;
  link.target = '_blank';

  const linkIcon = document.createElement('i');
  linkIcon.classList.add('bx', 'bx-link'); // Add the appropriate class for the link icon

  const linkText = document.createElement('span');
  linkText.textContent = 'View on GitHub';

  link.appendChild(linkIcon);
  link.appendChild(linkText);

  projectCard.appendChild(title);
  projectCard.appendChild(description);
  projectCard.appendChild(link);

  return projectCard;
}




// *************************Academic Excellence Graph***********************

// Real data for semesters and CGPA
const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
const cgpaData = [3.53, 3.61, 3.76, 3.89, 3.73,];

// Get the canvas element and its context
const canvas = document.getElementById('academicGraph');
const context = canvas.getContext('2d');

// Set up the axes and labels
const xAxis = 50; // starting point for x-axis
const yAxis = 350; // starting point for y-axis
const graphWidth = 700; // width of the graph
const graphHeight = 300; // height of the graph

// Draw x-axis
context.beginPath();
context.moveTo(xAxis, yAxis);
context.lineTo(xAxis + graphWidth, yAxis);
context.stroke();

// Draw y-axis
context.beginPath();
context.moveTo(xAxis, yAxis);
context.lineTo(xAxis, yAxis - graphHeight);
context.stroke();

// Plot the real data points and add labels
for (let i = 0; i < semesters.length; i++) {
  const x = xAxis + (i * (graphWidth / (semesters.length - 1)));
  const y = yAxis - ((cgpaData[i] - 3.5) * (graphHeight / 1)); // Using 3.5 as the baseline

  // Draw a point for each semester
  context.beginPath();
  context.arc(x, y, 5, 0, 2 * Math.PI);
  context.fillStyle = '#007bff'; // Blue color
  context.fill();
  context.stroke();

  // Draw a line connecting points
  if (i > 0) {
    const prevX = xAxis + ((i - 1) * (graphWidth / (semesters.length - 1)));
    const prevY = yAxis - ((cgpaData[i - 1] - 3.5) * (graphHeight / 1));
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(x, y);
    context.strokeStyle = '#007bff'; // Blue color
    context.stroke();
  }

  // Add labels for semesters
  context.fillStyle = '#000';
  context.fillText(semesters[i], x - 15, yAxis + 20);

  // Add labels for CGPA values
  context.fillText(cgpaData[i].toFixed(2), x - 15, y - 10);
}
// Redraw the graph when the window is resized
window.addEventListener('resize', function() {
  setCanvasSize();
  drawGraph();
});

// Initial draw
drawGraph();
