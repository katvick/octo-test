export default class Slider {
  #idVisibleCards = [];
  #numberVisibleCards = 0;
  #visibleCards = [];

  constructor(slides) {
    this.slides = slides;
    this.updateSlider();
  }

  setSlides = (slides) => {
    this.slides = slides;
  }

  #countVisibleCards = () => {
    this.#numberVisibleCards = 0;
    this.#visibleCards = [];
    for (let slide of this.slides) {
      if (slide.style.display === 'grid') {
        this.#numberVisibleCards++;
        this.#visibleCards.push(slide);
      }
    }
  }

  #udpateIdVisibleCards = (number) => {
    this.#idVisibleCards = [];
    for (let i = 1; i <= number; i++) {
      this.#idVisibleCards.push(i);
    }
  }

  #hideSlides = () => {
    for (let slide of this.slides) {
      slide.style.display = 'none';
    }
  }

  updateSlider = () => {
    this.#countVisibleCards();
    this.#udpateIdVisibleCards(this.#numberVisibleCards);
  }

  showPrevSlide = (elementSlider) => {
    this.#hideSlides();

    for (let i = 0; i < this.#idVisibleCards.length; i++) {
      this.#idVisibleCards[i] -= 1;
      
      if (this.#idVisibleCards[i] < 1) {
        this.#idVisibleCards[i] = this.slides.length;
        this.slides.unshift(this.slides.pop());
      }

      const slide = this.slides.find((item) => +item.id === this.#idVisibleCards[i]);
      slide.style.display = 'grid';
    }

    const lastSlide = elementSlider.lastElementChild;        
    const deletedSlide = elementSlider.removeChild(lastSlide);
    elementSlider.insertAdjacentElement('afterbegin', deletedSlide);
  }

  showNextSlide = (elementSlider) => {
    this.#hideSlides();
    
    for (let i = 0; i < this.#idVisibleCards.length; i++) {
      this.#idVisibleCards[i] += 1;

      if (this.#idVisibleCards[i] > this.slides.length) {
        this.#idVisibleCards[i] = 1;
        this.slides.push(this.slides.shift());
      }

      const slide = this.slides.find((item) => +item.id === this.#idVisibleCards[i]);
      slide.style.display = 'grid';
    }

    const firstSlide = elementSlider.firstElementChild;        
    const deletedSlide = elementSlider.removeChild(firstSlide);
    elementSlider.insertAdjacentElement('beforeend', deletedSlide);
  }
  
}