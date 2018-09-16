const workImages = document.querySelectorAll('.work__featured-image');

if (workImages) {
  workImages.forEach((el, index) => {
    const loaded = () => {
      el.classList.add('is-loaded');
    };

    const img = el.querySelector('img');

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener('load', loaded);
      img.addEventListener('error', () => {
        console.log('error', index);
      });
    }
  });
}
