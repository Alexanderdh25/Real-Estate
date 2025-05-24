// export function handleLoginSuccess(user, datasets = []) {
//     // Set currentUser
//     localStorage.setItem('currentUser', JSON.stringify(user));

//     // UI changes
//     const ctaButton = document.querySelector('.cta');
//     const userProfile = document.getElementById('userProfileSection');
//     const body = document.querySelector('body');
//     const userAccOverlay = document.getElementById('userAccOverlay');

//     if (ctaButton) ctaButton.style.display = 'none';
//     if (userProfile) userProfile.style.display = 'inline';
//     if (userAccOverlay) userAccOverlay.style.display = 'none';
//     if (body) body.classList.remove('no-scroll');

//     // Re-render and re-bind each dataset/container pair
//     datasets.forEach(({ data, containerSelector, itemsKey }) => {
//         console.log('data', data, 'container', containerSelector, 'item', itemsKey);
//         const container = document.querySelector(containerSelector);
//         if (container && data) {
//             renderPropertyCards(data, container);
//             addPropertyToFavorite({ data, containerSelector, itemsKey });
//         }
//     });
// }
