const swiper = new Swiper('.swiper', {


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    
      navigationDisabledClass: true,

    },

    slidesPerView: 'auto',

    spaceBetween: 30,

    // breakpoints: {
        
    //     360: {
    //         slidesPerView: 1,
    //     },

    //     1200: {
    //         slidesPerView: 2,
    //     },

    //     1400: {
    //         slidesPerView: 3,
    //     },

    // },

  });