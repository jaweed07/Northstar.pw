/*
 * JavaScript from Advisor - Business Consulting HTML Template
 * Original Author: CKT Themes
 * Version: 1.0
 */

// Encapsulate with jQuery's no-conflict mode for safety if other libs are used
(function($) {
    "use strict";

    var $window = $(window);

    // --- Full Screen & Screen Height Calculation (from template) ---
    // This function adjusts heights for sections marked with 'full-screen' or 'screen-height'
    // to match viewport height or viewport height minus header height.
    function setHeights() {
        var $fullScreen = $(".full-screen");
        var windowHeight = $window.height();
        $fullScreen.css("min-height", windowHeight);

        var $header = $("header");
        var headerHeight = $header.height();
        var $screenHeight = $(".screen-height");
        var adjustedHeight = windowHeight - headerHeight;
        $screenHeight.css("height", adjustedHeight);
    }

    // --- Preloader Removal (from template) ---
    // Fades out the preloader element once the document is ready.
    $("#preloader").fadeOut("normall", function() {
        $(this).remove();
    });

    // --- Sticky Header Functionality (adapted from template) ---
    // Changes header style on scroll to create a sticky effect.
    $window.on("scroll", function() {
        var scrollTop = $window.scrollTop();
        var $header = $("header");
        var $logo = $(".navbar-brand img"); // Target the logo image within the navbar-brand link

        // Apply/remove 'scrollHeader' class based on scroll position
        if (scrollTop <= 50) { // If scrolled up less than 50px
            $header.removeClass("scrollHeader").addClass("fixedHeader");
            // Optionally change logo for fixed header state, if design requires
            // $logo.attr("src", "img/logos/logo-inner.png"); // This would be your default logo
        } else { // If scrolled down more than 50px
            $header.removeClass("fixedHeader").addClass("scrollHeader");
            // Optionally change logo for scrolled header state
            // $logo.attr("src", "img/logos/logo.png"); // This would be a different logo for sticky
        }
    });

    // --- Scroll Top Percentage (from template, adapted) ---
    // Shows a scroll-to-top button with percentage progress.
    (function() {
        let updateScrollTopPercentage = () => {
            let scrollTop = document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let percentage = Math.round((scrollTop / scrollHeight) * 100);
            let $scrollTopPercentage = $(".scroll-top-percentage");

            $scrollTopPercentage.css("background", `conic-gradient( #FFCC53 ${percentage}%, #051B2E ${percentage}%)`);

            if (scrollTop > 100) {
                $scrollTopPercentage.addClass("active");
            } else {
                $scrollTopPercentage.removeClass("active");
            }

            if (percentage < 96) {
                $("#scroll-value").text(`${percentage}%`);
            } else {
                $("#scroll-value").html('<i class="fa-solid fa-angle-up"></i>');
            }
        };

        window.onscroll = updateScrollTopPercentage;
        window.onload = updateScrollTopPercentage;

        $(".scroll-top-percentage").on("click", function() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    })();

    // --- Background Image Data Attribute (from template) ---
    // Sets background-image CSS property from data-background attribute.
    $(".parallax,.bg-img").each(function() {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // --- Video Lightbox (from template) ---
    // Initializes Magnific Popup for videos.
    $(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    });

    // --- Resize Event Handler (from template) ---
    // Recalculates heights on window resize.
    $window.resize(function(e) {
        setTimeout(function() {
            setHeights();
        }, 500);
        e.preventDefault();
    });

    // --- WOW.js Initialization (from template) ---
    // Initializes WOW.js for scroll-based animations.
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false, // Set to false to disable on mobile as per template
        live: true
    }).init();

    // --- Current Year Update (from template) ---
    // Updates an element with class 'current-year' to display the current year.
    $(".current-year").text(new Date().getFullYear());

    // Call setHeights on document load for initial setup
    setHeights();

    // --- Document Ready Functions (from template) ---
    $(document).ready(function() {
        // --- Owl Carousel Initializations (from template, adapted) ---
        // Hero Slider
        $(".slider-fade1").owlCarousel({
            items: 1,
            loop: true,
            dots: true, // Use dots for navigation
            margin: 0,
            nav: true, // Enable nav buttons
           navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"]
, // Themify icons
            autoplay: true,
            autoplayTimeout: 7000, // 7 seconds per slide
            smartSpeed: 1500,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: { // On screens wider than 992px
                    nav: true, // Show nav buttons
                    dots: false // Hide dots
                }
            }
        });

        // Services Slider (now using Owl Carousel)
       // Services Slider (now using Owl Carousel)
$("#services-slider").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    nav: true, // <-- Enable navigation
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Arrow icons
    dots: true,
    center: false,
    margin: 30,
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 }
    }
});


        // Courses Slider (now using Owl Carousel)
       $("#courses-slider").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  nav: true,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  dots: true,
  margin: 30,
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    992: { items: 3 }
  }
});

        // Testimonials Slider (already named testimonial-carousel-one in template)
        $(".testimonial-carousel-one").owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: true, // Enable nav buttons
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"], // Font Awesome icons
            dots: true,
            margin: 0,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000, // 5 seconds per slide
            smartSpeed: 1500,
            items: 1, // Only one testimonial at a time
            responsive: {
                992: { // On screens wider than 992px
                    dots: false, // Hide dots
                    nav: true // Show nav buttons
                }
            }
        });

        // Event listener for hero slider animations (from template)
        $(".slider-fade1").on("changed.owl.carousel", function(event) {
            var currentItem = event.item.index - 2; // Adjusted index
            $(".owl-item span").removeClass("animated fadeInUp");
            $(".owl-item h1").removeClass("animated fadeInUp");
            $(".owl-item p").removeClass("animated fadeInUp");
            $(".owl-item .banner-button").removeClass("animated fadeInUp");

            $(".owl-item").not(".cloned").eq(currentItem).find("span").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(currentItem).find("h1").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(currentItem).find("p").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(currentItem).find(".banner-button").addClass("animated fadeInUp");
        });

        // --- Countdown (if implemented, from template) ---
        // Assuming a div with class 'countdown' and 'data-date' attribute
        // Example: <div class="countdown" data-date="01 Aug 2027 00:01:00"></div>
        $(".countdown").countdown({
            date: "01 Aug 2027 00:01:00", // Example date, replace with actual
            format: "on"
        });

        // --- Odometer (if implemented, from template) ---
        // Requires Waypoints.js and Odometer.js libraries
        // Example: <span class="odometer" data-count="1234">0</span>
        $(".odometer").waypoint(function(direction) {
            if (direction === "down") {
                let count = $(this.element).attr("data-count");
                $(this.element).html(count);
            }
        }, {
            offset: "80%" // Trigger when 80% of element is visible
        });
    });

    // --- LightGallery Initialization (from template) ---
    // Used for portfolio image galleries.
    $window.on("load", function() {
        // Prevent default click on portfolio links (if they are part of a gallery)
        $(".portfolio-link").on("click", function(e) {
            e.stopPropagation();
        });
        // Initializes lightGallery for elements with these classes
        $(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery();
    });


    // --- Smooth Scrolling for Navigation Links ---
    // Added back manual smooth scroll to ensure it works with the header offset
    $('a[href^="#"]').on('click', function(event) {
        var $anchor = $(this);
        var targetId = $anchor.attr('href');

        // Check if it's an internal anchor link
        if (targetId.length > 1 && $(targetId).length) {
            event.preventDefault();

            var headerHeight = $('#home-header').outerHeight();
            var offsetTop = $(targetId).offset().top - headerHeight;

            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 1000, 'easeInOutExpo'); // Uses easeInOutExpo from jQuery UI if available, or 'swing'

            // Close mobile nav if open
            if ($('.navigation').hasClass('active')) {
                $('.navigation').removeClass('active');
                $('.navbar-toggler').removeClass('menu-opened'); // Also remove hamburger icon animation class
            }
        }
    });

    // --- Hamburger Menu Toggle ---
    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("menu-opened");
        $(".navigation").toggleClass("active");
    });

 
    

})(jQuery); // End of jQuery no-conflict wrapper

document.addEventListener("DOMContentLoaded", function () {
  // Select all internal anchor links starting with #
  const links = document.querySelectorAll('a[href^="#"]');
  const headerOffset = document.querySelector('.fixedHeader')?.offsetHeight || 80;

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      // Only handle if the target exists on the page
      if (target) {
        e.preventDefault();

        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// links

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav-ul li a");
  const headerOffset = document.querySelector(".fixedHeader")?.offsetHeight || 80;

  function activateNavLink() {
    let currentSection = "";

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top - headerOffset;
      if (top <= 10) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const linkHref = link.getAttribute("href").replace("#", "");
      if (linkHref === currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);
});

// back end

// This is the updated code for your script.js file.
// It correctly handles form submission to your new Google Apps Script URL.

(function($) {
    "use strict";

    // ... (all your other JavaScript code like sliders, preloader, etc., remains here)

    // --- Contact Form Submission ---
    // This part should replace ALL existing contact form listeners in your script.js
    
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm");
      if (!form) return; // Exit if the form doesn't exist

      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // The URL you copied after deploying your Google Apps Script
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz66jRPp7GRtFyaTWDOLQTtQBrDhbQLviHZFKd_Aif6cYC7kA3p4kuy4H9vvSTz3imF/exec";

        const formData = {
          fullName: document.getElementById("fullName").value,
          emailAddress: document.getElementById("emailAddress").value,
          contactNumber: document.getElementById("contactNumber").value,
          subject: document.getElementById("subject").value,
          interest: document.getElementById("interest").value,
          message: document.getElementById("message").value
        };
        
        // Show some user feedback that the form is sending
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        fetch(SCRIPT_URL, {
          method: "POST",
          // The body must be a stringified JSON object
          body: JSON.stringify(formData),
          // CORS mode is required for cross-origin requests
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            // NOTE: Because of `no-cors`, we can't directly read the response body.
            // We assume success if the request doesn't throw an error.
            // Google Apps Script will still run and send the email.
            alert("✅ Message sent successfully!");
            form.reset();
        })
        .catch(error => {
            console.error("❌ Error submitting form:", error);
            alert("❌ There was a problem submitting your message. Please try again.");
        })
        .finally(() => {
            // Re-enable the button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        });
      });
    });


    // ... (the rest of your original script.js code)

})(jQuery); // End of jQuery no-conflict wrapper
