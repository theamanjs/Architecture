function toggleMenu(){
    let navbar = document.querySelector('.nav-container');
    navbar.classList.toggle('toggle-menu');
    let isEnabled = navbar.classList.contains('toggle-menu');
    document.body.style.overflowY = "auto";
    if(isEnabled) document.body.style.overflowY = "hidden";
}


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

// ----------------------------------------

document.querySelector('.welcome-image').ondragstart = function() { return false; };