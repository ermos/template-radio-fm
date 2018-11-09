var btnNavMobile = document.querySelector('#nav__mobile');
var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('nav');

btnNavMobile.addEventListener('click', function(){
    nav.classList.toggle('mobile__content--show');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});