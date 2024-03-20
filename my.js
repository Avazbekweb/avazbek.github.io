let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

menuicon.classList.remove('fa-x');
navbar.classList.remove('active');