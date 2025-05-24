import { toggLikeButton } from "./toggleLikeButton.js";
import { addFavorite } from "./addFavorite.js";
import { removeFavorite } from "./removeFavorite.js";

export function addPropertyToFavorite({
    containerSelector,
}) {
    const container = document.querySelector(containerSelector);
    
    if (!container) {
        console.warn(`Container '${overlayContainer}' not found in DOM.`);
        return; 
    }

    container.addEventListener('click', e => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const button = e.target.closest('.like-icon');

        if (!button) return;
        const propertyCard = button.closest('.card');
        const propertyId = propertyCard?.dataset?.id;
        console.log(propertyId);

         if (!propertyId) return;

        if (!currentUser) {
            alert("Please log in to save favorites.");
            return;
        }

          const isLiked = button.classList.contains('hover');
            if (isLiked) {
                removeFavorite(propertyId);
            } else {
                addFavorite(propertyId);
            }

        //   const alreadyFavorited = currentUser.favoriteProperties.some(
        //     prop => prop === propertyId
        // );

        // console.log(alreadyFavorited);


        // if (!alreadyFavorited) {
        //     currentUser.favoriteProperties.push(propertyId);
        //     updateCurrentUser(currentUser);
        //     // console.log(`Property ${property.id} added to favorites.`);
        // } else {
        //     console.log("Already in favorites");
        // }

        toggLikeButton(button);
    });

}