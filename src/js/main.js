    import { fetchData } from "./data.js";
    import { heroSlider } from "./components/heroSlider.js";
    import { renderPropertyCards } from "./components/propertyCards.js";
    import { renderAgentsContent } from "./components/agentCards.js";
    import { renderPopularPlacesContent } from "./components/popularPlaces.js";
    import { renderPagination } from "./utils/pagination.js";
    import { cardImgOverlay } from "./utils/galleryCardsOverlay.js";
    import { hamburgerMenu } from "./utils/hamburgerMenu.js";
    import { sortCards } from "./utils/sortCards.js";
    import { searchCardInput } from "./utils/searchCards.js";
    import { scrollToTop } from "./utils/scrollToTop.js";
    import { swipeCards } from './utils/swipe.js';
    import { userForm } from "./components/userForm.js";
    import { addPropertyToFavorite } from "./utils/addToFavorite.js";
    import { restoreLoginUI } from "./components/restoreLoginUI.js";
    import { initRefreshContainers } from "./components/refreshCardContainers.js";

    window.onload = async () => {
      restoreLoginUI();
        try {
          const data = await fetchData();
        
          heroSlider(data);
          renderPopularPlacesContent(data);
          renderAgentsContent(data);

          cardImgOverlay({
            overlayContainer: ".card-container"
          });
          cardImgOverlay({
            overlayContainer: ".card-container-rent"
          });
          hamburgerMenu();
          userForm();
          
          const salePagination = renderPagination({
            data,
            containerSelector: '.card-container',
            paginationWrapperSelector: '.pagination',
            prevBtnSelector: '.prevPagination',
            nextBtnSelector: '.nextPagination',
            renderFunction: renderPropertyCards,
            itemsKey: 'villasForSale',
          });

          const rentPagination = renderPagination({
            data,
            containerSelector: '.card-container-rent',
            paginationWrapperSelector: '.pagination-rent',
            prevBtnSelector: '.prevPaginationRent',
            nextBtnSelector: '.nextPaginationRent',
            renderFunction: renderPropertyCards,
            itemsKey: 'villasForRent',
          });

          swipeCards({
            containerSelector: '.card-container',
            prevButtonSelector: '.prevPagination',
            nextButtonSelector: '.nextPagination',
            // reRenderFunction: salePagination.reRender
          });

          swipeCards({
            containerSelector: '.card-container-rent',
            prevButtonSelector: '.prevPaginationRent',
            nextButtonSelector: '.nextPaginationRent',
            // reRenderFunction: rentPagination.reRender
          });

          swipeCards({
            containerSelector: '.slider',
            prevButtonSelector: '.prev',
            nextButtonSelector: '.next'
            // reRenderFunction: rentPagination.reRender
          });

          sortCards({
            data,
            sortVillasButton: '#sortButton',
            itemsKey: 'villasForSale',
            resetButton: '#resetButton',
            reRenderFunction: salePagination.reRender
          });

          sortCards({
            data,
            sortVillasButton: '#sortButtonRent',
            itemsKey: 'villasForRent',
            resetButton: '#resetButtonRent',
            reRenderFunction: rentPagination.reRender
          });

          searchCardInput({
            data,
            searchInputSelector: "#searchInput",
            itemsKey: 'villasForSale',
            clearButton: '.clear-btn',
            reRenderFunction: salePagination.reRender
          });

          searchCardInput({
            data,
            searchInputSelector: "#searchInputRent",
            itemsKey: 'villasForRent',
            clearButton: '.clear-btn-rent',
            reRenderFunction: rentPagination.reRender
          });

          addPropertyToFavorite({
            containerSelector: '.card-container',
          });

          addPropertyToFavorite({
            containerSelector: '.card-container-rent',
          });

          initRefreshContainers({
            data: data,
            reRenderSale: salePagination.reRender,
            reRenderRent: rentPagination.reRender
          });

          scrollToTop();
        } catch (error) {
          console.error('Error loading data:', error);
        }
      };