let slideIndex = 1;

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    const items = document.getElementsByClassName("carousel__item");
    const dots = document.querySelectorAll(".carousel__indicators button");
    if (n > items.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = items.length
    }
    for (i = 0; i < items.length; i++) {
        items[i].classList.remove("carousel__item_active");
    }
    items[slideIndex - 1].classList.add("carousel__item_active");
    dots[slideIndex - 1].className += " active";
}

let slideShowIndex = 0;

const items = document.getElementsByClassName("carousel__item");
if (items.length > 0) {
    showSlides();
}

function showSlides() {
    if (slideShowIndex > 4) {
        slideShowIndex = 0;
    }
    slideShowIndex++;
    if (slideShowIndex >= 0) {
        currentDiv(slideShowIndex);
    }

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}