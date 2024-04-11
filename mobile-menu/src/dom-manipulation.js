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
    slides.forEach((slide, index) => {
      slide.classList.remove('current-slide', 'previous-slide', 'next-slide');
      slide.style.opacity = '0';

      circles[index].classList.remove('active');
    });

    const prevSlideIndex = (slideIndex - 1 + slides.length) % slides.length;
    const nextSlideIndex = (slideIndex + 1) % slides.length;

    slides[slideIndex].classList.add('current-slide');
    slides[slideIndex].style.opacity = '1';

    slides[prevSlideIndex].classList.add('previous-slide');
    slides[prevSlideIndex].style.opacity = '0.5';

    slides[nextSlideIndex].classList.add('next-slide');
    slides[nextSlideIndex].style.opacity = '0.5';

    slides[slideIndex].style.display = 'block';

    circles[slideIndex].classList.add('active');

    currentSlideIndex = slideIndex;
  }

  function showNextSlide() {
    goToSlide((currentSlideIndex + 1) % slides.length);
  }

  function showPreviousSlide() {
    goToSlide((currentSlideIndex - 1 + slides.length) % slides.length);
  }

  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => goToSlide(index));
  });

  const slideInterval = setInterval(showNextSlide, 5000);

  goToSlide(0);

  return () => clearInterval(slideInterval);
}

export { manipulateDOM, setupCarousel };
