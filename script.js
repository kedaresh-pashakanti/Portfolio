function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Intersection Observer for section animations
const sections = document.querySelectorAll('.section-container');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => sectionObserver.observe(section));

// Set skill levels dynamically
const articles = document.querySelectorAll('.article-container article');
articles.forEach(article => {
  const skillLevel = article.querySelector('p').textContent;
  let percentage;
  switch(skillLevel.toLowerCase()) {
    case 'experienced': percentage = '90%'; break;
    case 'intermediate': percentage = '75%'; break;
    case 'basic': percentage = '60%'; break;
    default: percentage = '50%';
  }
  article.style.setProperty('--skill-level', percentage);
});

// Remove section observer to keep content visible
// The animations will now trigger on hover instead of scroll
