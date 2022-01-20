const slideList = [{
        img: "/images/slider_puppies.jpg",
        text: 'Małe psiaki i kociaki nie mogą się doczekać'
    },
    {
        img: src = "/images/slider_cat.jpg",
        text: 'Wiele zwierząt czeka na swój dom'
    },
    {
        img: "../images/slider_old_dog.jpg",
        text: 'Starsze wiekiem też potrafią kochać'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

// Interfejs
const time = 3000;
let active = 0;
let stopflag = false;
//

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlide = () => {
    if (stopflag === true) {
        interval1 = setInterval(changeSlide, time);
        stopflag = false;
    }
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}

let interval1 = setInterval(changeSlide, time)