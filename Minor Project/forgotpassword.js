const verificationTypeSelect = document.getElementById('verification-type');
const verificationInput = document.getElementById('verification-input');
const verificationLabel = document.getElementById('verification-label');
const verificationCodeContainer = document.getElementById('verification-code-container');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');

verificationTypeSelect.addEventListener('change', () => {
  const selectedType = verificationTypeSelect.value;
  verificationLabel.textContent = selectedType === 'email' ? 'Email Address' : 'Phone Number';
  verificationCodeContainer.style.display = selectedType === 'phone' ? 'block' : 'none';
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate sending verification code (replace with actual backend logic)
  const verificationType = verificationTypeSelect.value;
  const verificationInputValue = verificationInput.value;
  
  if (verificationType === 'email') {
    // Send verification code to email
    console.log(`Sending verification code to email: ${verificationInputValue}`);
  } else {
    // Send verification code to phone number (SMS or WhatsApp)
    console.log(`Sending verification code to phone: ${verificationInputValue}`);
  }
})

