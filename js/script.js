const swiper = new Swiper('.swiper', {


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    
      navigationDisabledClass: true,

    },


    spaceBetween: 30,

    breakpoints: {
        
        360: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
          slidesPerView: 3.3,
        }

    },

  });