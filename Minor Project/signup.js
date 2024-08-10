document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    let isValid = true;

    // Username validation
    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else {
        showSuccess(username);
    }

    // Email validation
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Password validation
    if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (isValid) {
        console.log('Form is valid');
        // Submit form or do further processing here
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
    input.style.borderColor = 'green';
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}



document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);
    
    // Toggle the eye icon
    this.textContent = passwordFieldType === 'password' ? '👁️' : '👁️‍🗨️';
});