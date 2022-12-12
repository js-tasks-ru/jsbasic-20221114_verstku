function initCarousel() {
  const carouselBox = document.querySelector('[data-carousel-holder]');
  const carouselInner = carouselBox.querySelector('.carousel__inner');
  const arrowLeft = carouselBox.querySelector('.carousel__arrow_left');
  const arrowRight = carouselBox.querySelector('.carousel__arrow_right');
  const amountSlid = 4;

  let carouselInnerWidth = carouselInner.offsetWidth;
  let transformTranslateX = 0;

  carouselInner.style.transform = 'translateX(0px)';
  displayArrows(0);

  carouselBox.addEventListener('click', function (event) {
    let target = event.target;
    if (target.closest('.carousel__arrow_right')) {
      transformTranslateX = transformTranslateX - carouselInnerWidth;
    }

    if (target.closest('.carousel__arrow_left')) {
      transformTranslateX = transformTranslateX + carouselInnerWidth;
    }

    carouselInner.style.transform = `translateX(${transformTranslateX}px)`;
    displayArrows(transformTranslateX);

  }, false);

  function displayArrows(xPosition) {
    if (xPosition === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (xPosition === -carouselInnerWidth * (amountSlid - 1)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

}
