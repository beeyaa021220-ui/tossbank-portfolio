const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }});
  }, {threshold: .08, rootMargin:'0px 0px -25px 0px'});
  revealEls.forEach(el => observer.observe(el));
} else {revealEls.forEach(el=>el.classList.add('visible'));}
const links = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('section[id]')];
if ('IntersectionObserver' in window) {
 const activeObserver = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }); }, {rootMargin:'-30% 0px -60% 0px'});
 sections.forEach(s => activeObserver.observe(s));
}
