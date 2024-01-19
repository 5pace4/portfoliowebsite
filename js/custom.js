(function ($) {
  "use strict";

  // Check if color mode preference is stored in local storage
  var colorMode = localStorage.getItem("colorMode");

  // If not stored, set default mode
  if (!colorMode) {
    colorMode = "light"; // Set your default mode (light or dark)
  }

  // Apply color mode
  updateColorMode();

  // COLOR MODE
  $('.color-mode').click(function () {
    colorMode = (colorMode === "light") ? "dark" : "light";
    updateColorMode();
  })

  function updateColorMode() {
    $('.color-mode-icon').toggleClass('active', colorMode === "dark");
    $('body').toggleClass('dark-mode', colorMode === "dark");

    // Save the color mode preference in local storage
    localStorage.setItem("colorMode", colorMode);
  }

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
