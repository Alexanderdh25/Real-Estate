let currentSlide = 0;
let sliderData;

export function heroSlider(data) {
    sliderData = data.sliderCardData;
    const slides = document.querySelectorAll('.slider .slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const heroSliderCards = document.querySelector('.property-card-information');
    
    function UpdateSlideCardContent(index) {
        const cardData = sliderData[index];
        const isRentalStatus = cardData.badge.toLowerCase().includes('rent');
        const statusClass = isRentalStatus ? 'property-status-rent' : 'property-status';
      
        const cardHTML = `
                      <span class="${statusClass}">${cardData.badge}</span>
                  <div class="card-header">
                      <h2 class="title">${cardData.title}</h2>
                      <p class="card-address">
                          <img src="assets/icons/sliderCardLocation.png" alt="map icon" class="icon">
                          <span>${cardData.address}</span>
                      </p>
                  </div>
                  <div class="card-info">
                      <ul>
                          <li>
                              <img src="assets/icons/sliderCardBedrooms.png" alt="Bedroom icon" class="icon">
                              <span>${cardData.cardContent.bedrooms}</span>
                          </li>
                          <li>
                              <img src="assets/icons/sliderCardBath.png" alt="Bathroom icon" class="icon">
                              <span>${cardData.cardContent.bathrooms}</span>
                          </li>
                          <li>
                              <img src="assets/icons/sliderCardGarages.png" alt="car-garage icon" class="icon">
                              <span>${cardData.cardContent.garages}</span>
                          </li>
                          <li>
                              <img src="assets/icons/sliderCardSquareFeet.png" alt="ruler icon" class="icon">
                              <span>${cardData.cardContent.squareFeet}</span>
                          </li>
                      </ul>
                  </div>
                  <div class="card-price">
                      <span>$</span>
                      <span>${cardData.price}</span>
                  </div>
                  `;
      
        heroSliderCards.innerHTML = '';
        heroSliderCards.insertAdjacentHTML('beforeend', cardHTML);
      }
      UpdateSlideCardContent(currentSlide);
    
      function showSlide(index) {
        if (index >= slides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = slides.length - 1;
        }
      
        slides.forEach((slide, i) => {
          slide.style.display = i === currentSlide ? 'block' : 'none';
        });
      
        UpdateSlideCardContent(currentSlide);
      }
      
      function heroSliderCardAnimation() {
        heroSliderCards.classList.remove('property-card-information-animation');
        void heroSliderCards.offsetWidth;
        heroSliderCards.classList.add('property-card-information-animation');
      }
      
      prevButton.addEventListener('click', () => {
        currentSlide--;
        showSlide(currentSlide);
        heroSliderCardAnimation();
      });
      
      nextButton.addEventListener('click', () => {
        currentSlide++;
        showSlide(currentSlide);
        
        heroSliderCardAnimation();
      });
}