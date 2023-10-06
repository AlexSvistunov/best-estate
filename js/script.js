const swiper = new Swiper('.swiper', {


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    
      navigationDisabledClass: true,

    },


    spaceBetween: 30,

    breakpoints: {
        
        360: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
          slidesPerView: 3.3,
        }

    },

  });

const projButtons = document.querySelectorAll('.projects__btn');
projButtons.forEach(projButton => {

  projButton.addEventListener('click', (e) => {
    const dataBtn = projButton.getAttribute('data-filter');
    console.log(dataBtn);
    projButtons.forEach(projBtn => {
      projBtn.classList.remove('active');
    });
    const self = e.currentTarget;
    self.classList.add('active');


    const projItems = document.querySelectorAll('.projects__item');
    projItems.forEach(item => {
      const dataItem = item.getAttribute('data-target');

      if(dataBtn === "all" || dataBtn === dataItem) {
        item.style.display = "block";
      }
      else {
        item.style.display = "none";
      }
  
    });

    
  });



});


const showMore = document.querySelector('.projects__show-link');
const productsLength = document.querySelectorAll('.projects__item').length;
let currentVisibleElements = 4;
showMore.addEventListener('click', () => {
  currentVisibleElements += 2;
  const array = Array.from(document.querySelectorAll('.projects__item'));
  const visItems = array.slice(currentVisibleElements - 2, currentVisibleElements);

  visItems.forEach(el => {
    el.classList.add('visible');
  });

  if(currentVisibleElements === productsLength) {
    showMore.style.display = "none";
  }
    

});