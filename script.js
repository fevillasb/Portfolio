// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Force video to stay muted
const bbotVideo = document.getElementById('bbot-video');
if (bbotVideo) {
  bbotVideo.muted = true;
  bbotVideo.addEventListener('volumechange', () => {
    if (!bbotVideo.muted) bbotVideo.muted = true;
  });
}
