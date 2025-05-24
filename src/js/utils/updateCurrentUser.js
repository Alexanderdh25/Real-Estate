export function updateCurrentUser(updatedUser) {
  // Update the users array
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const index = users.findIndex(u => u.email === updatedUser.email);
    console.log(index);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  } else {
    console.warn("User not found for update.");
  }
}