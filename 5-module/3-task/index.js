function initCarousel() {
  const slideL = document.querySelector(".carousel__arrow_left");
  const slideR = document.querySelector(".carousel__arrow_right");
  const slideAll = document.querySelector('.carousel__inner');
  const sLength = document.querySelectorAll('.carousel__slide').length - 1;
  const offSet = slideAll.offsetWidth;
  slideL.style.display = 'none';

  let i = 0;

  slideL.addEventListener('click', () => {
    update(--i);
    slideAll.style.transform = `translateX(-${i * offSet}px)`;
  });

  slideR.addEventListener('click', () => {
    update(++i);
    slideAll.style.transform = `translateX(-${i * offSet}px)`;
  });

  function update(i) {
    slideL.style.display = i === 0 ? 'none' : '';
    slideR.style.display = i === sLength ? 'none' : '';
  }
}
