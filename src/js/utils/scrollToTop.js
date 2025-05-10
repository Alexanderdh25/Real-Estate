export function scrollToTop() {
    const backToTopButton = document.getElementById("back-to-top");

    backToTopButton.style.display = 'none';
    // Show the button when the user scrolls down 200px
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll to top on button click
    backToTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}