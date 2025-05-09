export function renderPropertyCards(properties, container) {
        container.innerHTML = '';

        properties.forEach(villa => {
        const html = `
            <div class="card">
            <img src="${villa.imgSrc}" alt="Card 1" class="card-image">
            <button class="card-gallery" data-images='${JSON.stringify(villa.imageGallery)}'>
                <img src="assets/icons/cardsModalButton.png" alt="gallery-popup" class="overlay-gallery-button">
            </button>
            <div class="card-content">
                <h3 class="card-title">${villa.propertyTitle}</h3>
                <p class="card-location">${villa.propertyLocation}</p>
                <div class="card-content">
                    <ul>
                        <li>
                            <img src="assets/icons/sliderCardBedrooms.png" alt="Bedroom icon" class="card-icon">
                            <span>${villa.propertyContent.bedrooms}</span>
                        </li>
                        <li>
                            <img src="assets/icons/sliderCardBath.png" alt="Bathroom icon" class="card-icon">
                            <span>${villa.propertyContent.bathrooms}</span>
                        </li>
                        <li>
                            <img src="assets/icons/sliderCardSquareFeet.png" alt="ruler icon" class="card-icon">
                            <span>${villa.propertyContent.squareFeet}</span>
                        </li>
                    </ul>
                </div>
                <div class="card-property-price">
                    <span class=forSaleVillaPrice>$${villa.propertyPrice}</span>
                </div>
            </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
        });
}