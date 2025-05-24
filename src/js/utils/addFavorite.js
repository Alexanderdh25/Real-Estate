import { updateCurrentUser } from "./updateCurrentUser.js";

export function addFavorite(propertyId) {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) return;

  if (!currentUser.favoriteProperties.includes(propertyId)) {
    currentUser.favoriteProperties.push(propertyId);
    updateCurrentUser(currentUser);
  }
}