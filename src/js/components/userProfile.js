import { renderPropertyCards } from "./propertyCards.js";

function userProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));

    if (!currentUser || !users) {
        console.error("User data not found.");
        return;
    }

    const matchedUser = users.find(user => user.email === currentUser.email); // Assuming 'email' is the identifier

    if (!matchedUser) {
        console.error("No matching user found in users list.");
        return;
    }

    renderUserProfile(matchedUser);
}

function renderUserProfile(user) {
    console.log(user.favoriteProperties);
    const favoritesDiv = document.querySelector('.favoriteProperties');
    const bookingsDiv = document.querySelector('.bookings');

}

userProfile();
