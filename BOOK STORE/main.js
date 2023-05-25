let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
windows.addEventListener('scroll',() => {
    header.classList.toggle('active',window.scrollY > 0);
});
menubar.onclick = () =>{
    navbar.classlist.toggle('active');
}
 window.onscroll = () => {
    navbar.classList.remove('active');
 }