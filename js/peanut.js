document.addEventListener('DOMContentLoaded', () => {
  const titleContainer = document.getElementById('title-container');
  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    if (offset !== 0) {
      if (titleContainer.className !== 'animate') {
        titleContainer.className = 'animate';
      }
    } else if (titleContainer.className === 'animate') {
      titleContainer.className = '';
    }
  });
});
