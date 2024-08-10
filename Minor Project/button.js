// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener('click', function() {
//   const loginUrl = "https://yourwebsite.com/login"; // Replace with your actual login URL
//   window.open(loginUrl, '_blank');
// });


// document.getElementById('loginButton').addEventListener('click', function() {
//     window.open('login.html', '_blank');
// });

const dropdownBtn = document.querySelectorAll(".dropdown-btn");

dropdownBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle("displayBlock");
  });
});
