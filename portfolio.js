
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Slick Slider for the project gallery
      $('.project-gallery').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // Your existing JavaScript code for smooth scrolling
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetSection = document.querySelector(link.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth' });
        });
      });
    });
  