export function restoreLoginUI() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const ctaButton = document.querySelector('.cta');
  const userProfile = document.getElementById('userProfileSection');

  if (currentUser) {
    if (ctaButton) ctaButton.parentElement.style.display = 'none';
    if (userProfile) {
      userProfile.style.display = 'flex';
      userProfile.textContent = `Hey, ${currentUser.name}!`;
    }
  } else {
    if (ctaButton) ctaButton.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
  }
}