const minWindowWidth = 783;

let slide = 0;
let slideShow;
let slideShowWidth;
let slideShowArea;
let slideShowAreaWidth;
let slides;
let dotsHolder;
let dots;
let menu;

window.onload = function() {
    setGlobalVars();
    setSlideWidth();
    setInterval(nextSlide, 7000);
}

window.onresize = function() {
    setGlobalVars();
    setSlideWidth();
    toggleMenu();
}

function setGlobalVars() {
    slideShow = document.getElementsByClassName("slideshow")[0];
    slideShowWidth = slideShow.offsetWidth;
    slideShowArea = slideShow.getElementsByClassName("area")[0];
    slides = slideShowArea.getElementsByClassName("slide");
    initDots();
    calculateSlideShowArea();

    menu = document.getElementsByClassName("menu")[0].getElementsByTagName("ul")[0];
}

function initDots() {
    dotsHolder = slideShowArea.getElementsByClassName("dots")[0];
    dots = dotsHolder.getElementsByClassName("dot");
    dots[0].classList.add('active');
}

function calculateSlideShowArea() {
    slideShowAreaWidth = (slideShowWidth * slides.length);
    slideShowArea.style.width = slideShowAreaWidth + "px";
}

function setSlideWidth() {
    for (const element of slides) {
        element.style.width = slideShowWidth + "px";
    }
}

function nextSlide() {
    let oldSlide = slide;

    if (slide >= 3) {
        slide = 0;
    } else {
        slide++;
    }

    slideShowArea.style.marginLeft = "-" + (slideShowWidth * slide) + "px";
    switchDot(oldSlide, slide);
}

function changeSlide(post) {
    slideShowArea.style.marginLeft = "-" + (slideShowWidth * post) + "px";
    switchDot(slide, post);
    slide = post;
}

function switchDot(oldPosition, newPosition) {
    dots[oldPosition].classList.remove('active');
    dots[oldPosition].classList.remove('no-click');
    dots[newPosition].classList.add('active');
    dots[newPosition].classList.add('no-click');
}

function toggleMenu() {
    let bodyWidth = document.getElementsByTagName("body")[0].offsetWidth;
    if (bodyWidth < minWindowWidth && menu.style.display == "block") {
        menu.style.display = "none";
    } else if (bodyWidth > minWindowWidth && menu.style.display == "none") {
        menu.style.display = "block";
    }
}