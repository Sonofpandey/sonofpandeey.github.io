// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navLinks = document.querySelector(".nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("nav-active");

//     // Animate Links
//     navLinks.querySelectorAll("li").forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//       }
//     });

//     // Hamburger Animation
//     hamburger.classList.toggle("toggle");
//   });
// });

// // Adding keyframes for the animation
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(`
//   @keyframes navLinkFade {
//     from {
//       opacity: 0;
//       transform: translateX(50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .toggle .line:nth-child(1) {
//     transform: rotate(-45deg) translate(-5px, 6px);
//   }
//   .toggle .line:nth-child(2) {
//     opacity: 0;
//   }
//   .toggle .line:nth-child(3) {
//     transform: rotate(45deg) translate(-5px, -6px);
//   }
// `, styleSheet.cssRules.length);

  
  gsap.to(".box1",{
    x:1000,
    duration:2,
    rotate:360,
    delay:2
    
    
})

gsap.to(".box2",{
    x:1000,
    y:400,
    duration:2,
    delay:2
})