let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
showSlides();

// Reload page function
function reloadPage() {
    location.reload();
}


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow', // Adds 3D coverflow effect
  grabCursor: true, // Enables grabbing cursor on hover
  centeredSlides: true, // Keeps the active slide centered
  loop: true, // Enables infinite looping
  slidesPerView: 3, // Default number of visible slides
  spaceBetween: 10, // Space between slides
  coverflowEffect: {
      rotate: 0, // Rotation of slides
      stretch: 0, // Stretch between slides
      depth: 100, // Depth effect
      modifier: 2.5, // Intensity of the effect
  },
  pagination: {
      el: '.swiper-pagination', // Pagination element
      clickable: true, // Make pagination dots clickable
  },
  navigation: {
      nextEl: '.swiper-button-next', // Next button element
      prevEl: '.swiper-button-prev', // Previous button element
  },
  breakpoints: {
      1200: {
          slidesPerView: 3, // 3 slides on large screens
          spaceBetween: 20,
      },
      990: {
          slidesPerView: 2, // 2 slides on medium screens
          spaceBetween: 15,
      },
      600: {
          slidesPerView: 1, // 1 slide on small screens
          spaceBetween: 10,
      },
  },
  autoplay: {
      delay: 4000, // 4-second auto-slide delay
      disableOnInteraction: false, // Auto-slide continues after interaction
      pauseOnMouseEnter: true, // Pause autoplay on hover
  },
  lazy: {
      loadPrevNext: true, // Preload previous and next slides
  },
  speed: 600, // Animation speed for transitions
});


// Video Hover Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.tranding-slide');

    slides.forEach(slide => {
      const video = slide.querySelector('.card-video');

      slide.addEventListener('mouseover', () => {
        video.style.display = 'block'; // Show video
        video.play(); // Play video
      });

      slide.addEventListener('mouseout', () => {
        video.style.display = 'none'; // Hide video
        video.pause(); // Pause video
        video.currentTime = 0; // Optional: Reset video to start
      });
    });
  });
  
 
  document.getElementById('thailand-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    var menu = document.getElementById('thailand-menu');
    
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';  // Hide the menu if it is already open
    } else {
      menu.style.display = 'flex';  // Show the menu if it is hidden
    }
  });

  document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('thailand-link').contains(event.target) || 
                        document.getElementById('thailand-menu').contains(event.target);
  
    if (!isClickInside) {
      document.getElementById('thailand-menu').style.display = 'none'; // Hide menu when clicking outside
    }
  });

  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const prev = document.querySelector('.carousel-arrow.prev');
  const next = document.querySelector('.carousel-arrow.next');
  
  let index = 0;
  const itemsVisible = 6; // Number of items visible at once
  const itemWidth = items[0].offsetWidth;
  
  next.addEventListener('click', () => {
    if (index < items.length / itemsVisible - 1) {
      index++;
      container.style.transform = `translateX(-${index * itemWidth * itemsVisible}px)`;
    }
  });
  
  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      container.style.transform = `translateX(-${index * itemWidth * itemsVisible}px)`;
    }
  });
  
  