export function swipeCards({
    containerSelector,
    prevButtonSelector,
    nextButtonSelector,
}) {
    const container = document.querySelector(containerSelector);
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);
    
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    const swipeThreshold = 80;

    container.addEventListener('touchstart', (e) => {
        if (e.target.closest('.card-gallery')) return; // Prevent swipe if the touch starts on an inner element
        touchStartX = e.touches[0].clientX;
    });

     container.addEventListener('touchend', (e) => {
        if (e.target.closest('.card-gallery')) return; // Prevent swipe if the touch starts on an inner element
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (isSwiping) return;
        isSwiping = true;

        requestAnimationFrame(() => {
            const distance = Math.abs(touchEndX - touchStartX);
            if (distance < swipeThreshold) {
                isSwiping = false;
                return;
            }

            if (touchStartX - touchEndX > swipeThreshold) {
                // Swiped left - Next Page
                if (nextButton && !nextButton.disabled) {
                    nextButton.click();
                    container.scrollTop = 0;
                }
            }

            if (touchEndX - touchStartX > swipeThreshold) {
                // Swiped right - Previous Page
                if (prevButton && !prevButton.disabled) {
                    prevButton.click();
                    container.scrollTop = 0;
                }
            }
            isSwiping = false;
        });
    }
}