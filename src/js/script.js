var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var items = document.getElementsByClassName("carousel__item");
    var dots = document.querySelectorAll(".carousel__indicators button");
    if (n > items.length) {slideIndex = 1}
    if (n < 1) {slideIndex = items.length}
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    items[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}