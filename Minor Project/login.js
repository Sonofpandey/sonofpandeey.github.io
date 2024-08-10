// scripts.js

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);
    
    // Toggle the eye icon
    this.textContent = passwordFieldType === 'password' ? '👁️' : '👁️‍🗨️';
});


