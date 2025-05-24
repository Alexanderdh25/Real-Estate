 export function createAccount() {
        const registerForm = document.getElementById('registerForm');
        const container = document.getElementById('userAccContainer');
        const registerButton = document.getElementById('registerButton');
        const createAccountButton = document.getElementById('createAccountButton');
        
         registerButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        createAccountButton.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('right-panel-active');
        });

        registerForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = registerForm.querySelector('#username').value.trim();
            const email = registerForm.querySelector('#email').value.trim();
            const password = registerForm.querySelector('#password').value.trim();

            // Simple validation
            if (!email || !password || !name) {
                alert('Please fill out all required fields.');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.email === email)) {
                console.log('users already exists');
                return;
            }

             // Hash password (note: bcryptjs would be used in the backend, but for now, I'll store it as-is)
                const userData = { 
                    name, 
                    email, 
                    password,
                    favoriteProperties: []
                };
            
            users.push(userData)    
            console.log(users);
            localStorage.setItem('users', JSON.stringify(users));

            console.log('Account Created Successfully');
            registerForm.reset();

        });
    }
    createAccount();