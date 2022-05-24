const container = document.querySelector('.container-wide');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.review-slide');
const navDots = document.querySelectorAll('.slider-dot');

let activeOrder = 0;

init();

function init() {
    for(let i=0; i<slides.length; i++) {
        const slide = slides[i];
        slide.dataset.order = i;
        slide.style.transform = "translate(-50%, -50%)";
        slide.addEventListener('click', slideHandler);
    }

    for(const navDot of navDots) {
        navDot.addEventListener('click', navHandler);
    }

    activeOrder = Math.floor(slides.length/2);
    
    upDate();
}

function upDate() {
    const {width, height} = slider.getBoundingClientRect();

    const a = width / 2;
    const b = height / 2; 
    const c = Math.PI / slides.length / 4;

    for(let i=0; i<slides.length; i++) {
        const leftSlide = document.querySelector(`.review-slide[data-order="${activeOrder - i}"]`);
        if(leftSlide) {
            leftSlide.style.zIndex = slides.length - i;
            leftSlide.style.opacity = 1 - (i*2)/slides.length;
            leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI*3)/2 - c*i*2)}px`;
            leftSlide.style.top = `${-b*Math.sin((Math.PI*3)/2 - c*i*2)}px`;
        }

        const rightSlide = document.querySelector(`.review-slide[data-order="${activeOrder + i}"]`);
        if(rightSlide) {
            rightSlide.style.zIndex = slides.length - i;
            rightSlide.style.opacity = 1 - (i*2)/slides.length;
            rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI*3)/2 + c*i*2)}px`;
            rightSlide.style.top = `${-b*Math.sin((Math.PI*3)/2 + c*i*2)}px`;
        }
    }
}

function slideHandler() {
    const order = parseInt(this.dataset.order, 10);
    activeOrder = order;
    upDate();
}

function navHandler(e) {
    e.preventDefault();
    const {dir} = this.dataset;
    if(dir === "prev") {
        activeOrder = Math.max(0, activeOrder - 1);
    } else
    if(dir === "next") {
        activeOrder = Math.min(slides.length - 1, activeOrder + 1);
    }
    upDate();
}