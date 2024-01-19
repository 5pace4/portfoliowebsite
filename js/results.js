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
        ["Structured Programming", "Calculus", "Computer Fundamental & Ethics"],
        ["Discrete Math", "Object-Oriented Programming", "Co-ordinate Geometry"],
        ["Electronics", "Digital Logic Design", "Data Structure", "Applied Statistics", "Fourier Analysis and Laplace transformation"],
        ["Digital Signal Processing", "Software Development with Java", "Algorithm Desing & Analysis", "Database Management System"],
        ["Data Communication", "Operating System", "Theory of Computing", "System Analysis & Design"],
        ["Software Engineering", "Computer Networks", "Computer Architecture", "Artificial Intelligence"],
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
        courseListContainer.innerHTML += courseListHTML;
        courseListContainer.style.display = 'block';
      } else {
        courseListContainer.innerHTML = '<p style="color: red;">*Only CS fundamental Courses are included here.</p>';
        courseListContainer.style.display = 'none';
      }
    }
  
    // Reset the course list visibility when the modal is closed
    $('#chartModal').on('hidden.bs.modal', function () {
      var courseListContainer = document.getElementById('courseListContainer');
      courseListContainer.innerHTML = '<p style="color: red;">*Only CS fundamental Courses are included here.</p>';
      courseListContainer.style.display = 'none';
    });