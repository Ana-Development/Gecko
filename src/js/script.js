let slideIndex = 1;
//showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var items = document.getElementsByClassName("carousel__item");
    var dots = document.querySelectorAll(".carousel__indicators button");
    if (n > items.length) {slideIndex = 1};
    console.log(slideIndex)
    if (n < 1) {slideIndex = items.length}
    for (i = 0; i < items.length; i++) {
        //items[i].style.display = "none";
        items[i].classList.remove("carousel__item_active");
    }
    for (i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
    }
    //items[slideIndex-1].style.display = "flex";
    items[slideIndex-1].classList.add("carousel__item_active");
    dots[slideIndex-1].className += " active";
}

let slideShowIndex = 0;
showSlides();

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