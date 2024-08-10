
// scripts.js

// document.getElementById('loginButton').addEventListener('click', function() {
//     window.open('login.html', '_blank');
// });


// document.getElementById('signupButton').addEventListener('click', function() {
//     window.open('signup.html', '_blank');
// });







gsap.to(".video",{
    scrollTrigger:{
        trigger:".video",
        start:"top top",
        end:"buttom button",
        pin:true,
        scrub:2
    },
    '--clip':"100%",
    ease:power2,
    duration:2,
})

    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        console.log(gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientx))
        gsap.to(this.querySelector(".picture"),{opacity:1, ease:power4, duration: .5
            })

    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{opacity:0, ease:power4, duration: .5})
    })
})


// gsap.to(".down-nav",{
//     x:100,
//     rotate:360,

// })


document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}`);
});



// scripts.js

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('box');
    const passwordFieldType = passwordField.getAttribute('type') === 'box' ? 'text' : 'box';
    passwordField.setAttribute('type', passwordFieldType);
    
    // Toggle the eye icon
    this.textContent = passwordFieldType === 'box' ? '👁️' : '👁️‍🗨️';
});


