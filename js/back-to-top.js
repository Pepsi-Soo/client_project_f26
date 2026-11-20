// Deliverable#3, unique thing: Show the "Back to top" link only after the user scrolls down the page to make them easier to go back to nav
const backToTop = document.querySelector(".back-to-top");

function toggleBackToTop() {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();
