 // свайпер слайдер в дизайн-проектах
    var galleryThumbs = new Swiper('.design-gallery', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.design-slider', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

// слайдер услуги
var swiper = new Swiper('.cube-swiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// слайдер теги
var swiper = new Swiper('.tags-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.tags-btn-next',
    prevEl: '.tags-btn-prev',
  },
  autoplay: {
    delay: 1000,
	pauseOnMouseEnter: true,
	disableOnInteraction: false,	
  },
});
// обычный слайдер на портфолио
var swiper = new Swiper('.port-swiper', {
  slidesPerView: '1',
  spaceBetween: 30,
	grabCursor: true,
  loop: true,  
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
//новый слайдер мобильный на главной 
var swiper = new Swiper(".new-slider-mob", {
	navigation: {
		nextEl: ".new-slider-mob-next",
		prevEl: ".new-slider-mob-prev",
	},
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});
var swiper = new Swiper('.statyi-swiper', {
  slidesPerView: '3',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.statyi-swiper-next',
    prevEl: '.statyi-swiper-prev',
  },
   breakpoints: {
     320: {
      slidesPerView: 1,
    },
    780: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    }  
  },
});