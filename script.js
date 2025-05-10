// Scroll animation or other effects
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    document.querySelector('#funzioni').scrollIntoView({ behavior: 'smooth' });
  });
});
