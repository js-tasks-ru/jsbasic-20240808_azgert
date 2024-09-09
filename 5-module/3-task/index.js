function initCarousel() {
  const slideL = document.querySelector(".carousel__arrow_left");
  const slideR = document.querySelector(".carousel__arrow_right");
  const slideAll = document.querySelector('.carousel__inner');
  const sLength = document.querySelectorAll('.carousel__slide').length - 1;
  const offSet = slideAll.offsetWidth;
  slideL.style.display = 'none';

  let currentSlide = 0;

  slideL.addEventListener('click', () => {
    update(--currentSlide);
    slideAll.style.transform = `translateX(-${currentSlide * offSet}px)`;
  });

  slideR.addEventListener('click', () => {
    update(++currentSlide);
    slideAll.style.transform = `translateX(-${currentSlide * offSet}px)`;
  });

  function update(currentSlide) {
    slideL.style.display = currentSlide === 0 ? 'none' : '';
    slideR.style.display = currentSlide === sLength ? 'none' : '';
  }
}
