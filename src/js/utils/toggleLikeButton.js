export function toggLikeButton(button) {
    if (button) {
        if (button.classList.contains('default')) {
            console.log('Default image clicked:', button);
            button.style.opacity = '0';
            button.style.zIndex = '0';

                const buttonHover = button.nextElementSibling
                if(buttonHover) {
                buttonHover.style.opacity = '1';
                buttonHover.style.zIndex = '1';
                }

            // Handle default image click
        } else if (button.classList.contains('hover')) {
            button.style.opacity = '0';
            button.style.zIndex = '0';

            const buttonDefault = button.previousElementSibling;
            if(buttonDefault) {
                console.log('Hover image clicked:', buttonDefault);
                buttonDefault.style.opacity = '1';
                buttonDefault.style.zIndex = '1';
                // Handle hover image click
            }
        }
    }
}