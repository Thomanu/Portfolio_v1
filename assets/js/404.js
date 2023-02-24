

        // Menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if (navToggle) {
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  console.log('test');
});
}

if (navClose) {
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});
}

const navLink = document.querySelectorAll('.nav_link');


// Apparition au scroll 
const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 400,
});

sr.reveal(`.home_img, .about_emp, .footer_text, .footer_logo_box`, {
delay: 600,
});
sr.reveal(` .me_img`, { origin: 'right' });

sr.reveal(` .about_img`, { origin: 'left' });
sr.reveal(`.about_text`, { origin: 'right' });
sr.reveal(`.home_data, .about_emp, .project_title, .me`, {
delay: 300,
});
sr.reveal(`.project_data, .skills_container`, { delay: 400 });


// Scroll actif 
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
const scrollY = window.pageYOffset;
sections.forEach((current) => {
  const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id');
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
      .querySelector('.nav_menu a[href*=' + sectionId + ']')
      .classList.add('active-link');
  } else {
    document
      .querySelector('.nav_menu a[href*=' + sectionId + ']')
      .classList.remove('active-link');
  }
});
}
window.addEventListener('scroll', scrollActive);

// Scroll Up
function scrollUp() {
const scrollUp = document.getElementById('scroll-up');
if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);