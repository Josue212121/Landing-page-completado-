const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    console.log("register")

    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    console.log("login")
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    console.log("register")

    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    console.log("register")

    wrapper.classList.remove('active-popup');
});


