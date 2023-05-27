document.addEventListener('DOMContentLoaded', () => {
  const parallax = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    parallax.forEach((prlx, i) => {
      prlx.style.backgroundPositionY = `${(offset - prlx.offsetTop) * 0.7}px`;
    });
  });
});
