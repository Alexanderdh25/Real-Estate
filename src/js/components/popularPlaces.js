export function renderPopularPlacesContent(data) {
    const popularPlacesContainer = document.querySelector('.image-container');
    
    const popularPlacesData = data.popularPlaces;
      popularPlacesData.forEach(function(popularPlaceData) {
        const html = `
          <div class="image-overlay">
            <img src="${popularPlaceData.imgSrc}" alt="Image 1" class="image">
            <div class="overlay-text">
                <p>${popularPlaceData.content.city}</p>
                <p>${popularPlaceData.content.availableProperties}</p>
            </div>
          </div>
        `;
        popularPlacesContainer.insertAdjacentHTML('beforeend', html);
      });
  }