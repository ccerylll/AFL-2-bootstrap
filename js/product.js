
  const carousel = document.querySelector('.vertical-carousel');
  const slides = document.querySelectorAll('.vertical-slide');
  const prevBtn = document.querySelector('.vertical-prev');
  const nextBtn = document.querySelector('.vertical-next');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * slides[0].clientHeight;
    carousel.style.transform = `translateY(${offset}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  // Optional: swipe gesture
  let startY = 0;
  carousel.addEventListener('touchstart', e => startY = e.touches[0].clientY);
  carousel.addEventListener('touchend', e => {
    let endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) nextBtn.click();
    else if (endY - startY > 50) prevBtn.click();
  });