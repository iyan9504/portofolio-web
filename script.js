// ====== DARK MODE TOGGLE ======
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon dan save preference
  if (document.body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// ====== HAMBURGER MENU ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close hamburger menu saat nav link diklik
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('active');
  });
});

// ====== SCROLL ANIMATIONS ======
const faders = document.querySelectorAll('.fade-in, .fade-up');
const options = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ====== ACTIVE NAVIGATION STATE ======
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});