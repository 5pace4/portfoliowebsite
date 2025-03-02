document.addEventListener('DOMContentLoaded', function () {
  var cgpaChartCanvas = document.getElementById('cgpaChart');
  var chartModal = new bootstrap.Modal(document.getElementById('chartModal'));
  var courseListContainer = document.getElementById('courseListContainer');

  // Semester & CGPA Data
  var semesters = [
    '1st semester',
    '2nd Semester',
    '3rd Semester',
    '4th semester',
    '5th semester',
    '6th semester',
    '7th semester',
    '8th semester',
  ];
  var cgpaValues = [3.58, 3.63, 3.76, 3.88, 3.73, 3.85, 3.62, 0];

  var cgpaChart;

  function createChart() {
    if (cgpaChart) {
      cgpaChart.destroy();
    }
    cgpaChart = new Chart(cgpaChartCanvas, {
      type: 'line',
      data: {
        labels: semesters,
        datasets: [
          {
            label: 'CGPA',
            data: cgpaValues,
            borderColor: 'rgb(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: 'rgb(255, 102, 0)',
            pointRadius: 6,
            pointHoverRadius: 10,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: { display: true, text: 'Semester' },
          },
          y: {
            title: { display: true, text: 'CGPA' },
            min: 3.5,
            max: 4.0,
          },
        },
        plugins: {
          legend: {
            labels: { font: { size: 14 } },
          },
        },
      },
    });
  }

  // Fix modal issue on small screens (delayed rendering)
  function openModal() {
    chartModal.show();
    setTimeout(createChart, 500); // Ensures chart is created properly
  }

  // Open modal when clicking the icon
  document
    .querySelector('.bx.bxs-bar-chart-alt-2')
    .addEventListener('click', openModal);

  // Function to Generate Course List
  function generateCourseList() {
    var courseData = [
      ['Structured Programming', 'Calculus', 'Computer Fundamental & Ethics'],
      ['Discrete Math', 'Object-Oriented Programming', 'Co-ordinate Geometry'],
      [
        'Electronics',
        'Digital Logic Design',
        'Data Structure',
        'Applied Statistics',
        'Fourier Analysis and Laplace transformation',
      ],
      [
        'Digital Signal Processing',
        'Software Development with Java',
        'Algorithm Design & Analysis',
        'Database Management System',
      ],
      [
        'Data Communication',
        'Operating System',
        'Theory of Computing',
        'System Analysis & Design',
      ],
      [
        'Software Engineering',
        'Computer Networks',
        'Computer Architecture',
        'Artificial Intelligence',
      ],
      [],
      [],
    ];

    var courseListHTML = '<ul>';
    courseData.forEach((semesterCourses, index) => {
      courseListHTML += `<li><strong>${semesters[index]}</strong>: ${
        semesterCourses.length
          ? semesterCourses.join(', ')
          : 'No courses listed'
      }</li>`;
    });
    courseListHTML += '</ul>';

    courseListContainer.innerHTML = courseListHTML;
    courseListContainer.style.display = 'block';
  }

  // Ensure course list is generated when modal is opened
  document
    .getElementById('chartModal')
    .addEventListener('shown.bs.modal', function () {
      generateCourseList();
    });
});

// /////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function () {
//   var cgpaChartCanvas = document.getElementById('cgpaChart');
//   var chartModal = new bootstrap.Modal(document.getElementById('chartModal'));

//   // Semester & CGPA Data
//   var semesters = [
//     '1st semester',
//     '2nd Semester',
//     '3rd Semester',
//     '4th semester',
//     '5th semester',
//     '6th semester',
//     '7th semester',
//     '8th semester',
//   ];
//   var cgpaValues = [3.58, 3.63, 3.76, 3.88, 3.73, 3.85, 3.62, 0];

//   // Ensure Chart is properly rendered in modal
//   var cgpaChart;

//   function createChart() {
//     if (cgpaChart) {
//       cgpaChart.destroy(); // Destroy old chart to prevent duplication
//     }
//     cgpaChart = new Chart(cgpaChartCanvas, {
//       type: 'line',
//       data: {
//         labels: semesters,
//         datasets: [
//           {
//             label: 'CGPA',
//             data: cgpaValues,
//             borderColor: 'rgb(255, 165, 0)', // Orange border
//             backgroundColor: 'rgba(255, 165, 0, 0.2)', // Light orange fill
//             borderWidth: 2,
//             tension: 0.4, // Smoother line
//             pointBackgroundColor: 'rgb(255, 102, 0)', // Darker orange points
//             pointRadius: 6,
//             pointHoverRadius: 10,
//             fill: true,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             title: { display: true, text: 'Semester' },
//           },
//           y: {
//             title: { display: true, text: 'CGPA' },
//             min: 3.5,
//             max: 4.0,
//           },
//         },
//         plugins: {
//           legend: {
//             labels: { font: { size: 14 } },
//           },
//         },
//       },
//     });
//   }

//   // Ensure modal shows correctly with chart
//   document
//     .querySelector('.bx.bxs-bar-chart-alt-2')
//     .addEventListener('click', function () {
//       chartModal.show();
//       setTimeout(createChart, 500); // Delay ensures chart renders properly
//     });

//   // Ensure the modal chart takes 90% height, course list 10%
//   document
//     .getElementById('chartModal')
//     .addEventListener('shown.bs.modal', function () {
//       cgpaChartCanvas.style.width = '100%';
//       cgpaChartCanvas.style.height = '90%';
//       document.getElementById('courseListContainer').style.height = '10%';
//       createChart(); // Create chart when modal is opened
//     });

//   // Course List (Always Visible)
//   function generateCourseList() {
//     var courseData = [
//       ['Structured Programming', 'Calculus', 'Computer Fundamental & Ethics'],
//       ['Discrete Math', 'Object-Oriented Programming', 'Co-ordinate Geometry'],
//       [
//         'Electronics',
//         'Digital Logic Design',
//         'Data Structure',
//         'Applied Statistics',
//         'Fourier Analysis and Laplace transformation',
//       ],
//       [
//         'Digital Signal Processing',
//         'Software Development with Java',
//         'Algorithm Design & Analysis',
//         'Database Management System',
//       ],
//       [
//         'Data Communication',
//         'Operating System',
//         'Theory of Computing',
//         'System Analysis & Design',
//       ],
//       [
//         'Software Engineering',
//         'Computer Networks',
//         'Computer Architecture',
//         'Artificial Intelligence',
//       ],
//       [],
//       [],
//     ];

//     var courseListHTML = '<ul>';
//     courseData.forEach((semesterCourses, index) => {
//       courseListHTML += `<li><strong>${semesters[index]}</strong>: ${
//         semesterCourses.length
//           ? semesterCourses.join(', ')
//           : 'No courses listed'
//       }</li>`;
//     });
//     courseListHTML += '</ul>';

//     var courseListContainer = document.getElementById('courseListContainer');
//     courseListContainer.innerHTML = courseListHTML;
//     courseListContainer.style.display = 'block';
//   }

//   // Ensure course list is populated on modal open
//   document
//     .getElementById('chartModal')
//     .addEventListener('shown.bs.modal', function () {
//       generateCourseList();
//     });
// });
