import { authenticateUser, validateFields } from "../utils/authUser.js";
import { restoreLoginUI } from "./restoreLoginUI.js";
import { refreshContainersAfterLogin } from "./refreshCardContainers.js";

export function loginUI() { 
    const userAccOverlay = document.getElementById('userAccOverlay');
    const container = document.getElementById('userAccContainer');
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');
    const signInButton = document.getElementById('signIn');
    const ctaButton = document.querySelector('.cta');
    const body = document.querySelector('body');

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('right-panel-active');
        });

         function hideUserForm() {
            userAccOverlay.style.display = 'none';
            body.classList.remove('no-scroll');
        }

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = loginForm.querySelector('#login-email').value.trim();
            const password = loginForm.querySelector('#login-password').value.trim();
            if (!validateFields([email, password])) return;

            const user = authenticateUser(email, password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                hideUserForm();
                ctaButton.parentElement.style.display = 'none';
                restoreLoginUI();
                refreshContainersAfterLogin();
            } else {
                alert('Invalid email or password!');
            }
        });
    };