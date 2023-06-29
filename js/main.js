"use strict"

// Burger

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    console.log(targetItem);
    if(targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

// Tabs

const tabNavItems = document.querySelectorAll('.tabs__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener("click", function(e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;

    if(targetElement.closest('.tabs__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if(tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
                tabNavItem.classList.remove('active');
            }
            if(tabNavItem === targetElement){
                newActiveIndex = index;
            }
        });

        targetElement.closest('.tabs__button').classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
})

// swiper

const swiper = new Swiper('.responses__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 480px
        771: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        320: {
            slidesPerView: 1,
            spaceBetween: 30,        
        }
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-responses__arrow.swiper-button-next',
      prevEl: '.slider-responses__arrow.swiper-button-prev',
    },
  });