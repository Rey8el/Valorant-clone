document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById("main-banner"); // Removed the #
  const movementStrength = 25;
  const height = movementStrength / window.innerHeight;
  const width = movementStrength / window.innerWidth;
  let lastTranslateX = 0;
  let lastTranslateY = 0;

  header.addEventListener('mousemove', (e) => {
      const offsetX = 0.5 - e.pageX / window.innerWidth;
      const offsetY = 0.5 - e.pageY / window.innerHeight;
      let translateX = offsetX * movementStrength;
      let translateY = offsetY * movementStrength;

      // Limit translateX to prevent revealing the edge
      const maxTranslateX = 5; // Adjust as needed
      translateX = Math.min(Math.max(translateX, -maxTranslateX), maxTranslateX);

      // Limit translateY to prevent revealing the edge
      const maxTranslateY = 5; // Adjust as needed
      translateY = Math.min(Math.max(translateY, -maxTranslateY), maxTranslateY);

      header.style.transform = `translate(${translateX}px, ${translateY}px)`;

      lastTranslateX = translateX;
      lastTranslateY = translateY;
  });

  header.addEventListener('mouseleave', () => {
      header.style.transform = `translate(${lastTranslateX}px, ${lastTranslateY}px)`;
  });
});



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });



