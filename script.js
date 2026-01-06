// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// DARK/LIGHT TOGGLE
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// SIMPLE SCROLL ANIMATION
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight/1.2;
  sections.forEach(sec => {
    if(scrollY > sec.offsetTop){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
      sec.style.transition = 'all 0.8s ease-in-out';
    } else {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(50px)';
    }
  });
});
