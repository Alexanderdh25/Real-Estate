let currentSlide = 0;
let propertiesToShow = 5; // Set initial number of properties to show
let sliderData;
let allPropertiesForSale = [];
let allPropertiesForRent = [];
//Slider
const slides = document.querySelectorAll('.slider .slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const heroSliderCards = document.querySelector('.property-card-information');
//Containers for SaleProperties, RentProperties, PopularPlaces and agents
const villaForSaleCardContainer = document.querySelector('.card-container');
const villaForRentCardContainer = document.querySelector('.card-container-rent');
const popularPlacesContainer = document.querySelector('.image-container');
const agentsInfoContainer = document.querySelector('.agents-cards');
//Show more button - For Sale Properties and For Rent Properties
const showMorePropertiesForSale = document.querySelector('.showMoreForSale');
const showMorePropertiesForRent = document.querySelector('.showMoreForRent');
//Back To Top Button
const backToTopButton = document.getElementById("back-to-top");
const searchInput = document.getElementById('searchInput');
const searchInputRent = document.getElementById('searchInputRent');
//Toggle menu visibility on hamburger click
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav-menu');
//Sorting Buttons for Sale and Rent Properties
const sortButton = document.getElementById('sortButton');
const sortButtonRent = document.getElementById('sortButtonRent');
let sortAscending = false;
//clear input button
const inputClearButton = document.querySelector('.clear-btn');
const inputRentClearButton = document.querySelector('.clear-btn-rent');

function fetchData() {
  fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        sliderData = data.sliderCardData;
        UpdateSlideCardContent(currentSlide);

        propertiesForSaleCards(data);
        propertiesForRentCards(data);
        renderPopularPlacesContent(data);
        renderAgentsContent(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Function to display the current slide and card info
function UpdateSlideCardContent(index) {
  const cardData = sliderData[index];

  const cardHTML = `
                <span class="property-status">${cardData.badge}</span>
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

prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

// Cards img overlay
function cardImgOverlay() {
  const openBtn = document.querySelector('.card-container');
  const openBtnRent = document.querySelector('.card-container-rent');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  // Open the overlay when the button is clicked
  function buttonDelegation(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === "IMG") {
      overlay.style.display = 'flex';
    }
  }

  openBtn.addEventListener('click', buttonDelegation);
  openBtnRent.addEventListener('click', buttonDelegation);

  // Close the overlay when the close button is clicked
  closeBtn.onclick = () => {
      overlay.style.display = 'none';
  };

  // Optionally, close the overlay if clicked outside of it
  overlay.onclick = (e) => {
      if (e.target === overlay) {
          overlay.style.display = 'none';
      }
  };
}

// Function to render the properties for sale (incrementally)
function propertiesForSaleCards(data) {
  allPropertiesForSale = data.villasForSale;

  // Show the initial set of sale properties (4 at a time)
  renderProperties(allPropertiesForSale, propertiesToShow, villaForSaleCardContainer);

  showMorePropertiesForSale.addEventListener('click', () => {
    propertiesToShow += 5;
    renderProperties(allPropertiesForSale, propertiesToShow, villaForSaleCardContainer);

    if (propertiesToShow >= allPropertiesForSale.length) {
      showMorePropertiesForSale.style.display = 'none';
    }
  });

  cardImgOverlay();
}

// Function to render the properties for rent (incrementally)
function propertiesForRentCards(data) {
  allPropertiesForRent = data.villasForRent;

  // Show the initial set of rent properties (4 at a time)
  renderProperties(allPropertiesForRent, propertiesToShow, villaForRentCardContainer);

  showMorePropertiesForRent.addEventListener('click', () => {
    propertiesToShow += 5;
    renderProperties(allPropertiesForRent, propertiesToShow, villaForRentCardContainer);

    if (propertiesToShow >= allPropertiesForRent.length) {
      showMorePropertiesForRent.style.display = 'none';
    }
  });
}

// Function to render properties in the container
function renderProperties(properties, numberToShow, container) {
  container.innerHTML = '';

  for (let i = 0; i < numberToShow; i++) {
    if (i >= properties.length) break;

    const villa = properties[i];
    const html = `
      <div class="card">
        <img src="${villa.imgSrc}" alt="Card 1" class="card-image">
        <button class="card-gallery">
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
  }
}

function renderPopularPlacesContent(data) {
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

function renderAgentsContent(data) {
  agentsData = data.agentData;
    agentsData.forEach(function(agentData) {
      const html = `
        <div class="agent-card">
          <img src="${agentData.imgSrc}" alt="Card 2" class="agent-image">
          <div class="agent-content">
            <h3 class="agent-fullname">${agentData.fullname}</h3>
            <p class="agent-proffesion">${agentData.profession}</p>
          </div>
        </div>
      `;
      agentsInfoContainer.insertAdjacentHTML('beforeend', html);
    });
}

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

//Clear Search Input
inputClearButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    searchInput.value = '';
    renderProperties(allPropertiesForSale, propertiesToShow, villaForSaleCardContainer);
});

inputRentClearButton.addEventListener('click', function(e) {
  console.log('clicked');
    e.preventDefault();  

    searchInputRent.value = '';
    renderProperties(allPropertiesForRent, propertiesToShow, villaForRentCardContainer);
});

  searchInput.addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    
    const filteredForSale = allPropertiesForSale.filter(villa => villa.propertyTitle.toLowerCase().includes(searchQuery) || villa.propertyLocation.toLowerCase().includes(searchQuery));
    renderProperties(filteredForSale, propertiesToShow, villaForSaleCardContainer);
  });


  searchInputRent.addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();

    const filteredForRent = allPropertiesForRent.filter(villa => villa.propertyTitle.toLowerCase().includes(searchQuery) || villa.propertyLocation.toLowerCase().includes(searchQuery));
    renderProperties(filteredForRent, propertiesToShow, villaForRentCardContainer);
  });

function sortProperties() {
  // Sort properties for sale and for rent
  const sortedForSale = [...allPropertiesForSale.slice(0, propertiesToShow)].sort((a, b) => {
    return sortAscending ? a.propertyPrice - b.propertyPrice : b.propertyPrice - a.propertyPrice; 
  });

  // Re-render the properties after sorting
  renderProperties(sortedForSale, propertiesToShow, villaForSaleCardContainer);

  sortAscending = !sortAscending;

  sortButton.textContent = sortAscending ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)';
}

function sortPropertiesRent() {
  const sortedForRent = [...allPropertiesForRent.slice(0, propertiesToShow)].sort((a, b) => {
    return sortAscending ? a.propertyPrice - b.propertyPrice : b.propertyPrice - a.propertyPrice;
  });

  renderProperties(sortedForRent, propertiesToShow, villaForRentCardContainer);

  sortAscending = !sortAscending;

  sortButtonRent.textContent = sortAscending ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)';
}

sortButton.addEventListener('click', sortProperties);
sortButtonRent.addEventListener('click', sortPropertiesRent);


//RESET BUTTON
const resetButton = document.querySelector('#resetButton');
const resetButtonRent = document.querySelector('#resetButtonRent');

function resetSort() {
  renderProperties(allPropertiesForSale, propertiesToShow, villaForSaleCardContainer);
}

function resetSortRent() {
  renderProperties(allPropertiesForRent, propertiesToShow, villaForRentCardContainer);
}
resetButton.addEventListener('click', resetSort);
resetButtonRent.addEventListener('click', resetSortRent);

// Show the button when the user scrolls down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top on button click
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.onload = fetchData;