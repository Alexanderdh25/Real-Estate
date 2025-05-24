import { updateCurrentUser } from "./updateCurrentUser.js";

export function removeFavorite(propertyId) {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) return;

  currentUser.favoriteProperties = currentUser.favoriteProperties.filter(
    id => id !== propertyId
  );

  // Save changes using shared update util
  updateCurrentUser(currentUser);
}
