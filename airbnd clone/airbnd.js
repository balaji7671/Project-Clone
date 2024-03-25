function scrollLeftFunc() {
    const content = document.querySelector('.content');
    content.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRightFunc() {
    const content = document.querySelector('.content');
    content.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

function initializeSlider(sliderContainer) {
    let slider = sliderContainer.querySelector('.list');
    let items = sliderContainer.querySelectorAll('.list .item');
    let next = sliderContainer.querySelector('.buttons #next');
    let prev = sliderContainer.querySelector('.buttons #prev');
    let dots = sliderContainer.querySelectorAll('.dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    };

    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    };

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';
        let lastActiveDot = sliderContainer.querySelector('.dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            active = index;
            reloadSlider();
        });
    });


    reloadSlider();
}

let sliderContainers = document.querySelectorAll('.slider_container');
sliderContainers.forEach(sliderContainer => {
    initializeSlider(sliderContainer);
});


