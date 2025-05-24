export function validateFields(fields) {
    for (let field of fields) {
        if (!field) {
            console.log('All fields must be filled!');
            return false;
        }
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(fields[0])) {
        console.log('Please enter a valid email address!');
        return false;
    }

    return true;
}

export function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    return user || null;
}
