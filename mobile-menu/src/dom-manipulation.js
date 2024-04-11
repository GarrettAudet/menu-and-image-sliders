function manipulateDOM() {
  const languageOptions = document.querySelectorAll('.language-option');

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      languageOptions.forEach((opt) => opt.classList.remove('selected'));

      option.classList.add('selected');
    });
  });
}

function setupCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const circles = document.querySelectorAll('.carousel-circles .fa-circle');
  let currentSlideIndex = 0;

  function goToSlide(slideIndex) {
    // Reset classes for all slides
    slides.forEach((slide, index) => {
      slide.classList.remove('current-slide', 'previous-slide', 'next-slide');
      slide.style.display = 'none'; // Hide slide

      // Remove 'active' class from all circles
      circles[index].classList.remove('active');
    });

    // Set the current slide
    slides[slideIndex].classList.add('current-slide');
    slides[slideIndex].style.display = 'block';
    circles[slideIndex].classList.add('active');

    // Set previous and next slides
    const previousIndex = (slideIndex - 1 + slides.length) % slides.length;
    const nextIndex = (slideIndex + 1) % slides.length;

    slides[previousIndex].classList.add('previous-slide');
    slides[previousIndex].style.display = 'block'; // Or use visibility/opacity for transitions

    slides[nextIndex].classList.add('next-slide');
    slides[nextIndex].style.display = 'block'; // Or use visibility/opacity for transitions

    currentSlideIndex = slideIndex;
  }

  function showNextSlide() {
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    goToSlide(nextSlideIndex);
  }

  // Attach click event to circles
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => goToSlide(index));
  });

  // Start rotating slides
  setInterval(showNextSlide, 5000);

  goToSlide(0); // Initialize to the first slide
}

export { manipulateDOM, setupCarousel };
