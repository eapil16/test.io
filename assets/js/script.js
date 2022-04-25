'use strict';
document.addEventListener('DOMContentLoaded', () => {
   
    const mainlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 28,
        speed: 800,
        navigation: {
            nextEl: ".main-slider-next",
            prevEl: ".main-slider-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero,
          },
    });

    function addZero(num){
        return (num > 9) ? num : '0' + num;
    }

});