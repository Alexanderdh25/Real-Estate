export function cardImgOverlay({overlayContainer}) {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = overlay.querySelector('.image-thumbnails');
    const body = document.querySelector('body');
    const container = document.querySelector(overlayContainer);

    function buttonDelegation(e) {
      const button = e.target.closest('.card-gallery');
      if (button) {
        const images = JSON.parse(button.dataset.images || '[]');
        if (images.length) {
          mainImage.src = images[0]; // Set main image
          thumbnailsContainer.innerHTML = images.map(img => `
            <img class="thumbnail" src="${img}" alt="Thumbnail">
          `).join('');
        } else {
          // Fallback content
          mainImage.src = 'https://placehold.co/600x400';
          thumbnailsContainer.innerHTML = '';
        }
        overlay.style.display = 'flex';
        // body.classList.add('no-scroll');
      }
    }
  
    container.addEventListener('click', buttonDelegation);

  
    closeBtn.onclick = () => {
      overlay.style.display = 'none';
      //  body.classList.remove('no-scroll');
    };
  
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        //  body.classList.remove('no-scroll');
      }
    };
  
    // Thumbnail click to change main image
    thumbnailsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('thumbnail')) {
        mainImage.src = e.target.src;
      }
    });
  }
  