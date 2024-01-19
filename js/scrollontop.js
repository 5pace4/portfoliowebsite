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