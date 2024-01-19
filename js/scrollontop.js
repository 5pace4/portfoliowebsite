document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTop");
  
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    scrollToTopBtn.addEventListener("click", scrollToTop);
  });
  

 //resume toggle
document.addEventListener("DOMContentLoaded", function () {
  var resumeButtonContainer = document.getElementById("customResumeButtonContainer");
  var resumeButton = document.getElementById("customResumeButton");
  var aboutSection = document.getElementById("about"); // Replace with the actual ID of your about section
  var toggleButton = document.getElementById("toggleButton"); // Replace with the actual ID of your toggle button/icon
  var toggleIcon = document.getElementById("toggleIcon"); // Replace with the actual ID of your toggle icon

  // Initially show the button
  resumeButtonContainer.style.display = "block";

  // Update position on window resize
  window.addEventListener("resize", updateButtonPosition);

  // Toggle button click event
  toggleButton.addEventListener("click", function () {
      // Toggle the button visibility
      resumeButtonContainer.style.display = resumeButtonContainer.style.display === "none" ? "block" : "none";

      // Toggle the icon class for reverse styling
      toggleIcon.classList.toggle("reverse-icon");
  });

  // Observe the about section
  var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              // About section is in view, hide the button
              resumeButtonContainer.style.display = "none";
          }
      });
  });

  // observer.observe(aboutSection);

  // Initial position update
  updateButtonPosition();
});

function updateButtonPosition() {
  var resumeButtonContainer = document.getElementById("customResumeButtonContainer");
  var bottomOffset = 95;
  var rightOffset = 45;

  resumeButtonContainer.style.position = "fixed";
  resumeButtonContainer.style.bottom = bottomOffset + "px";
  resumeButtonContainer.style.right = rightOffset + "px";
}

function checkResumeVisibility() {
  var resumeButton = document.getElementById("customResumeButton");
  var toggleIcon = document.getElementById("toggleIcon");

  // Check if the resume button is visible
  var isResumeVisible = resumeButton.offsetParent !== null;

  // Update the toggle icon direction based on the visibility of the resume button
  toggleIcon.style.transform = isResumeVisible ? "rotate(0deg)" : "rotate(180deg)";
}









document.addEventListener("DOMContentLoaded", function() {
  var cgpaChartCanvas = document.getElementById("cgpaChart");
  var chartModal = new bootstrap.Modal(document.getElementById('chartModal'));

  // Dummy data (replace with your actual data)
  var semesters = ["1st semester", "2nd Semester", "3rd Semester", "4th semester", "5th semseter", "6th semester", "7th semester", "8th semester"];
  var cgpaValues = [3.58, 3.63, 3.76, 3.88, 3.73, 0, 0, 0];

  // Create a chart
  var cgpaChart = new Chart(cgpaChartCanvas, {
    type: 'line',
    data: {
      labels: semesters,
      datasets: [{
        label: 'CGPA',
        data: cgpaValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Semester Number'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Obtained CGPA'
          },
          beginAtZero: true
        }
      }
    }
  });

  // Show the chart modal when the icon is clicked
  document.querySelector('.bx.bxs-bar-chart-alt-2').addEventListener('click', function() {
    chartModal.show();
  });
  
});

 var semesters = ["1st semester", "2nd Semester", "3rd Semester", "4th semester", "5th semester", "6th semester", "7th semester", "8th semester"];

  // Function to dynamically generate the course list HTML
  function generateCourseList() {
    // Dummy course data (replace with your actual course data)
    var courseData = [
      ["Structured Programming", "Object-Oriented Programming", "Competitive Programming"],
      ["Discrete Math", "Calculus", "Applied Statistics"],
      ["Electronics", "Digital Logic Design", "Digital Signal Processing"],
      ["Software Development with Java", "Data Structure", "Algorithm Analysis"],
      ["Database Management System", "Operating System", "Theory of Computing"],
    ];

    var courseListHTML = '<ul>';

    courseData.forEach((semesterCourses, index) => {
      courseListHTML += `<li><strong>${semesters[index]}</strong>: ${semesterCourses.join(', ')}</li>`;
    });

    courseListHTML += '</ul>';
    return courseListHTML;
  }

  // Function to show/hide the course list
  function toggleCourseList() {
    var courseListContainer = document.getElementById('courseListContainer');
    var courseListHTML = generateCourseList();

    // Toggle the visibility of the course list
    if (courseListContainer.style.display === 'none') {
      courseListContainer.innerHTML = courseListHTML;
      courseListContainer.style.display = 'block';
    } else {
      courseListContainer.innerHTML = '';
      courseListContainer.style.display = 'none';
    }
  }

  // Reset the course list visibility when the modal is closed
  $('#chartModal').on('hidden.bs.modal', function () {
    var courseListContainer = document.getElementById('courseListContainer');
    courseListContainer.innerHTML = '';
    courseListContainer.style.display = 'none';
  });