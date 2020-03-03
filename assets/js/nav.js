function toggleMenu(){
    let navbar = document.querySelector('.nav-container');
    navbar.classList.toggle('toggle-menu');
    let isEnabled = navbar.classList.contains('toggle-menu');
    document.body.style.overflowY = "auto";
    if(isEnabled) document.body.style.overflowY = "hidden";
}