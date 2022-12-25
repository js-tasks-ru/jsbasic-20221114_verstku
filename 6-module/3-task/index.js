import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  #slides = {};
  #carouselInnerWidth = undefined;

  constructor(slides) {
    this.#slides = slides;
    this.#render();
    this.#onArrowsClick();
    this.#onCarouselButtonClick();
  }


  #render() {
    const carouselDom = createElement(`
      
      <div class="carousel">
        
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
    
        <div class="carousel__inner">
          ${this.#slides.map((slide) => {
      return `
            <div class="carousel__slide" data-id="${slide.id}">
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
            `;
    }).join('')}
        </div>
      </div>
    `);

    this.elem = carouselDom;

  }

  #onArrowsClick = () => {
    const carouselInner = this.elem.querySelector('.carousel__inner');

    let transformTranslateX = 0;

    carouselInner.style.transform = 'translateX(0px)';
    this.#displayArrows(0);

    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      this.#carouselInnerWidth = carouselInner.offsetWidth;
      if (target.closest('.carousel__arrow_right')) {
        transformTranslateX = transformTranslateX - this.#carouselInnerWidth;
      }

      if (target.closest('.carousel__arrow_left')) {
        transformTranslateX = transformTranslateX + this.#carouselInnerWidth;
      }

      carouselInner.style.transform = `translateX(${transformTranslateX}px)`;
      this.#displayArrows(transformTranslateX);

    });

  }

  #displayArrows(xPosition) {
    const carouselBox = this.elem;
    const arrowLeft = carouselBox.querySelector('.carousel__arrow_left');
    const arrowRight = carouselBox.querySelector('.carousel__arrow_right');
    const amountSlid = this.#slides.length;

    if (xPosition === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (xPosition === -this.#carouselInnerWidth * (amountSlid - 1)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

  #onCarouselButtonClick = () => {

    this.elem.addEventListener('click', (event) => {

      const target = event.target;
      if (target.classList.contains('carousel__button')) {
        const carouselSlide = target.closest('.carousel__slide');
        const productAdd = new CustomEvent('product-add', {
          detail: carouselSlide.dataset.id,
          bubbles: true
        });

        this.elem.dispatchEvent(productAdd);

      }

    });

  }

}
