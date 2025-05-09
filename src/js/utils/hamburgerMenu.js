export function hamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburgerMenu.classList.toggle('open');
    });
    
    document.querySelector('main').addEventListener('click', function(e) {
      navbar.classList.remove('active');
      hamburgerMenu.classList.remove('open');
    });
}