export function userForm() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('userAccContainer');
    const userAccOverlay = document.getElementById('userAccOverlay');
    const closeUserFormButton = document.getElementById('closeUserFormButton');
    const ctaButton = document.querySelector('.cta');
    const body = document.querySelector('body');
    const nav = document.querySelector('.nav-menu');
    const burgerMenu = document.getElementById('hamburger-menu');
    const createAccountButton = document.getElementById('createAccountButton');
    const loginButton = document.getElementById('loginButton');


    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    ctaButton.addEventListener('click', () => {
        userAccOverlay.style.display = 'flex';
        body.classList.add('no-scroll');
        nav.classList.remove('active');
        burgerMenu.classList.toggle('open')
    });

    function hideUserForm() {
        userAccOverlay.style.display = 'none';
        body.classList.remove('no-scroll');
    }

    userAccOverlay.addEventListener('click', (e) => {
        if (e.target === userAccOverlay) {
            hideUserForm();
        }
    });

    closeUserFormButton.onclick = () => {
       hideUserForm();
    };

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            hideUserForm();
        }
    });

    createAccountButton.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('right-panel-active');
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('right-panel-active');
    });
}