import { loginUI } from "./login.js";
import { createAccount } from "./createAcc.js";
import { logout } from "./logout.js";

export function userForm() {
    const userAccOverlay = document.getElementById('userAccOverlay');
    const closeUserFormButton = document.getElementById('closeUserFormButton');
    const ctaButton = document.querySelector('.cta');
    const body = document.querySelector('body');
    const nav = document.querySelector('.nav-menu');
    const burgerMenu = document.getElementById('hamburger-menu');

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

    createAccount();
    loginUI();
    logout();
}