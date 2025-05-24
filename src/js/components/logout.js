export function logout() {
    const logoutButton = document.querySelector('.logoutButton');
    const userProfile = document.getElementById('userProfileSection');
    const userDropDown = document.querySelector('.user-menu');
    userProfile.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropDown.classList.toggle('openMenu');
    });

    document.addEventListener('click', (e) => {
        if (!userProfile.contains(e.target) && !userDropDown.contains(e.target)) {
            userDropDown.classList.remove('openMenu');
        }
    });

        document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            userDropDown.classList.remove('openMenu');
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        location.reload();
    });

    window.addEventListener('scroll', () => {
        userDropDown.classList.remove('openMenu');
    });
}