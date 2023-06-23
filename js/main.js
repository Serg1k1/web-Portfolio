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