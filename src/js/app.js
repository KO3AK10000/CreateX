'use srtict';
//импорт ф-ции проверки webP
import * as flsFunctions from "./modules/functions.js";


//импорт функций из node_modules
import '../../node_modules/swiper/swiper-bundle.js';
import '../../node_modules/focus-visible/dist/focus-visible.min.js';

window.addEventListener('DOMContentLoaded', function () {
  //---ф-ция WebP
  flsFunctions.isWebp();

  //---прибивка футера к низу на мобильных(убираем влияние верхней панели)
  flsFunctions.windowHeight();

  window.addEventListener('resize', () => {
    flsFunctions.windowHeight();
  });

  //--------------------class--TABS---------------------------

  class Tabs {
    constructor(selector) {
      this.tabs = document.querySelector(selector);
      this.btns = this.tabs.querySelectorAll('.tabs__btn');
      this.items = this.tabs.querySelectorAll('.tabs__item');

      this.btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          let target;
          if (e.target.classList.contains('tabs__btn')) {
            target = e.target;
          } else {
            target = e.target.closest('.tabs__btn');
          }

          const cat = target.dataset.btn;

          this.btns.forEach(btn => {
            btn.classList.remove('tabs__btn--active');
          });
          target.classList.add('tabs__btn--active');

          this.items.forEach(item => {
            const itemCat = item.dataset.item;
            if (cat == 0 || itemCat == cat) {
              item.classList.add('tabs__item--active');
            } else {
              item.classList.remove('tabs__item--active');
            }
          });
        });
      });
    }
  }

  //-----------------classModal--------------------

  class Modal {
    constructor(modal, btn) {
      this.open = document.querySelector(btn);
      this.modal = document.querySelector(modal);
      this.close = this.modal.querySelector('.modal__close');

      let lastFocus;

      this.open.addEventListener('click', () => {
        lastFocus = document.activeElement;
        this.modal.classList.add('modal--active');
        this.modal.setAttribute('tabindex', '0');
        this.modal.focus();
      });

      this.close.addEventListener('click', () => {
        this.modal.classList.remove('modal--active');
        lastFocus.focus();
      });


      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          if (this.modal.classList.contains('modal--active')) {
            e.preventDefault();
            this.modal.classList.remove('modal--active');
            lastFocus.focus();
          }
        }
      });
    }

  }

  //---------------heroMainSlider

  const heroMainSlider = document.querySelector('.slider-hero');

  if (heroMainSlider) {
    const swiper = new Swiper(heroMainSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      pagination: {
        el: '.hero__swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      navigation: {
        nextEl: '.slider-hero__btn--next',
        prevEl: '.slider-hero__btn--prew',
      },

    });
  }

  //--------------------portfolioMainSlider

  const portfolioMainSlider = document.querySelector('.main-portfolio');
  if (portfolioMainSlider) {
    const swiper = new Swiper(portfolioMainSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30,

      navigation: {
        nextEl: '.portfolio-main__btn--next',
        prevEl: '.portfolio-main__btn--prew',
      },
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },

    });
  }

  //--------------------reviewsMainSlider

  const reviewsMainSlider = document.querySelector('.reviews__slider--main');
  if (reviewsMainSlider) {
    const swiper = new Swiper(reviewsMainSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spaceBetween: 30,

      navigation: {
        nextEl: '.rewiews-main__btn--next',
        prevEl: '.rewiews-main__btn--prew',
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },

    });
  }

  //--------------------portfolioServiceSlider

  const portfolioServiceSlider = document.querySelector('.service-portfolio');
  if (portfolioServiceSlider) {
    const swiper = new Swiper(portfolioServiceSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30,

      navigation: {
        nextEl: '.portfolio-service__btn--next',
        prevEl: '.portfolio-service__btn--prew',
      },
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },

    });
  }

  //--------------------reviewsPortfolioSlider

  const reviewsPortfolioSlider = document.querySelector('.reviews__slider--portfolio');
  if (reviewsPortfolioSlider) {
    const swiper = new Swiper(reviewsPortfolioSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spaceBetween: 30,

      navigation: {
        nextEl: '.rewiews-portfolio__btn--next',
        prevEl: '.rewiews-portfolio__btn--prew',
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },

    });
  }

  //--------------------projectSlider

  const projectSliderContainer = document.querySelector('.project-slider');
  if (projectSliderContainer) {

    const sliderSecondary = new Swiper('.project-slider__slider--secondary', {
      slidesPerView: 5,
      speed: 800,
      spaceBetween: 10,
      breakpoints: {
        576: {
          slidesPerView: 6
        },

        768: {
          slidesPerView: 7,
          spaceBetween: 10,
        },

        1024: {
          slidesPerView: 8
        },

        1230: {
          slidesPerView: 10,
          spaceBetween: 20
        },
      },


    });

    const sliderMain = new Swiper('.project-slider__slider--main', {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spaceBetween: 30,

      navigation: {
        nextEl: '.project-slider__btn--next',
        prevEl: '.project-slider__btn--prew',
      },
      thumbs: {
        swiper: sliderSecondary,
      },

    });
  }

  //--------------------portfolioProjectSlider

  const portfolioProjectSlider = document.querySelector('.project-portfolio');
  if (portfolioProjectSlider) {
    const swiper = new Swiper(portfolioProjectSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30,

      navigation: {
        nextEl: '.portfolio-project__btn--next',
        prevEl: '.portfolio-project__btn--prew',
      },
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },

    });
  }

  //--------------------historySlider

  const historySlider = document.querySelector('.history__swiper');
  if (historySlider) {
    const pag = document.querySelectorAll('.history__date');
    const swiper = new Swiper(historySlider, {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      direction: "vertical",

      navigation: {
        nextEl: '.history__btn--next',
        prevEl: '.history__btn--prew',
      },

      on: {
        slideChangeTransitionEnd: function (swiper) {
          const index = swiper.activeIndex;
          pag.forEach(btn => {
            btn.classList.remove('history__date--active');
          });

          pag[index].classList.add('history__date--active');
        }
      }

    });

    

    pag.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        const target = e.target;
        pag.forEach(btn => {
          btn.classList.remove('history__date--active');
        });
        target.classList.add('history__date--active');
        swiper.slideTo(i);
      });
    });


  }





  //---------------------VIDEO------------------------

  const videoBlock = document.querySelector('.video-block');

  if (videoBlock) {
    const video = videoBlock.querySelector('.video-block__video');
    const play = videoBlock.querySelector('.video-block__play');
    const mute = videoBlock.querySelector('.video-block__mute');

    play.addEventListener('click', () => {
      play.closest('.video-block').classList.add('video-block--active');
      video.play();
      video.controls = true;
    });

    video.addEventListener('pause', () => {
      video.closest('.video-block').classList.remove('video-block--active');
      video.controls = false;
    });
  }

  //заполнение svg кругов

  const circles = document.querySelectorAll('.facts__circle');

  if (circles.length > 0) {
    circles.forEach(circle => {
      const target = circle.querySelector('circle');
      const radius = target.getAttribute('r');
      const value = circle.closest('.facts__item').dataset.value;
      const length = radius * 2 * 3.14;
      const empty = length * (100 - value) / 100;


      target.setAttribute('stroke-dasharray', length);
      target.setAttribute('stroke-dashoffset', empty);
    });
  }

  //положение кнопки goToTop

  const goToTop = document.querySelector('.gototop');

  if (goToTop) {
    const container = document.querySelector('.footer__container');
    let containerPosition = container.getBoundingClientRect();

    window.addEventListener('resize', () => {
      containerPosition = container.getBoundingClientRect();
      goToTop.style.cssText = `right: ${containerPosition.x + 15}px`;
    });

    goToTop.style.cssText = `right: ${containerPosition.x + 15}px`;



    goToTop.addEventListener('click', () => {
      window.scroll({
        left: 0,
        top: '#scroll-to',
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', () => {
      const position = goToTop.getBoundingClientRect();
      const hideBtn = position.top + window.pageYOffset;
      if (hideBtn < window.innerHeight * 2) {
        goToTop.classList.add('gototop--off');
      } else {
        goToTop.classList.remove('gototop--off');
      }
    });
  }

  //---------------------ACCORDEON----------
  const accordeon = document.querySelector('.offer-service__accordeon');

  if (accordeon) {
    if(document.documentElement.clientWidth >= 768){
      const items = accordeon.querySelectorAll('.accordeon__item');
    const btns = accordeon.querySelectorAll('.accordeon__btn');

    items[0].classList.add('accordeon__item--open');

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target;

        items.forEach(item => {
          item.classList.remove('accordeon__item--open');
        });

        target.closest('.accordeon__item').classList.add('accordeon__item--open');

      });
    });
    }
    
  }


  //-------------------------portfolioTabs----------

  const portfolioTabs = document.querySelector('.portfolio-section__babs');

  if (portfolioTabs) {
    const portfolioTabs = new Tabs('.portfolio-section__babs');
  }


  //-----------------onlyNine-----------------

   const load = document.querySelector('.portfolio-section__load-more');

  if (load) {
    let portfolioItems;
    let numOfShow = 9;

    const hideLoadMore = function () {
      const potent = document.querySelectorAll('.tabs__item--off');
      if (potent.length == 0) {
        load.classList.add('portfolio-section__load-more--off');
      } else {
        load.classList.remove('portfolio-section__load-more--off');
      }
      console.log(potent.length);
    };

    const onlyNine = function () {
      portfolioItems = document.querySelectorAll('.tabs__item--active');
      let i = 0;
      document.querySelectorAll('.tabs__item').forEach(item => {
        item.classList.remove('tabs__item--off');
      });

      portfolioItems.forEach(item => {
        i++;

        if (i > numOfShow) {
          item.classList.add('tabs__item--off');
        } else {
          item.classList.remove('tabs__item--off');
        }
      });
      hideLoadMore();
    };

    onlyNine();

    const tabsBtn = document.querySelector('.tabs__btns');

    tabsBtn.addEventListener('click', (e) => {
        numOfShow = 9;
        onlyNine();
    });

    load.addEventListener('click', () => {
      numOfShow = (numOfShow + 9);
      onlyNine();
    }); 
  }


  //--------------NEWS-Tabs----------

  const newsTabs = document.querySelector('.news__tabs');

  if (newsTabs) {
    const newsTabs = new Tabs('.news__tabs');
  }


  //---------------SELECT---------
  const selects = document.querySelectorAll('.form-label__select');

  if (selects.length > 0) {
    selects.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',

      });
    });
  }

  //------------modalSubscribe---------------

  const modalSubscribe = document.querySelector('.modal--subscribe');

  if (modalSubscribe) {
    const modalSubscribe = new Modal('.modal--subscribe', '.btn--subscribe');
  }


  //------------modalCv---------------

  const modalCv = document.querySelector('.modal--cv');

  if (modalCv) {
    const modalCv = new Modal('.modal--cv', '.btn--cv');
  }


  //---------------BURGER-NAV------------------
  const burger = document.querySelector('.header__burger');
  if (burger) {
    const nav = document.querySelector('.nav-main');

    burger.addEventListener('click', () => {
      burger.classList.toggle('header__burger--close');
      nav.classList.toggle('nav-main--active');
    });
  }

  //-------------------adaptive our-services items height----------

  const ourServicesItems = document.querySelectorAll('.our-services__link');

  if (ourServicesItems.length > 0) {
    const setSize = function () {
      ourServicesItems.forEach(item => {
        let size = item.offsetWidth;
        item.style.height = `${size}px`;
      });
    };

    setSize();

    window.addEventListener('resize', setSize);
  }





});