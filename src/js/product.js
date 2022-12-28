const showMorePopup = document.querySelector(".product__show-more");
const showMoreBtn = document.querySelector(".product__more-img");
const closeMoreBtn = document.querySelector(".product__show-more-img");

if (showMorePopup) {
    showMoreBtn.addEventListener("click", function () {
        showMorePopup.style.display = "block";
    });

    closeMoreBtn.addEventListener("click", function () {
        showMorePopup.style.display = "none";
        showMorePopup.parentElement.scrollIntoView();
    });
}