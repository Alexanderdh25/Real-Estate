  import { fetchData } from "./data.js";
  import { heroSlider } from "./components/heroSlider.js";
  import { renderPropertyCards } from "./components/propertyCards.js";
  import { renderAgentsContent } from "./components/agentCards.js";
  import { renderPopularPlacesContent } from "./components/popularPlaces.js";
  import { renderPagination } from "./utils/pagination.js";
  import { cardImgOverlay } from "./utils/galleryCardsOverlay.js";

  let allPropertiesForSale = [];
  let propertiesToShow = 5;

  window.onload = async () => {
      try {
        const data = await fetchData(); // This will get the data from the JSON file
        allPropertiesForSale = data.villasForSale
        console.log(data);  // Log the fetched data to see the structure in the console
      
        // Initialize components
        heroSlider(data);
        renderPopularPlacesContent(data);
        renderAgentsContent(data);

        const propertiesToDisplay = allPropertiesForSale.slice(0, propertiesToShow);
        const container = document.querySelector('.card-container');
        renderPropertyCards(propertiesToDisplay, container); // This renders the first page
        cardImgOverlay(); 

        renderPagination({
          data,
          containerSelector: '.card-container',
          paginationWrapperSelector: '.pagination',
          prevBtnSelector: '.prevPagination',
          nextBtnSelector: '.nextPagination',
          renderFunction: renderPropertyCards,
          itemsKey: 'villasForSale'
        });

        renderPagination({
          data,
          containerSelector: '.card-container-rent',
          paginationWrapperSelector: '.pagination-rent',
          prevBtnSelector: '.prevPaginationRent',
          nextBtnSelector: '.nextPaginationRent',
          renderFunction: renderPropertyCards,
          itemsKey: 'villasForRent'
        });
    
        // Pass the data to other functions if needed
        // initSlider(data.sliderCardData);  // Example function call (ensure it's defined elsewhere)
        // otherFunction(data.someOtherData); // etc.
    
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };