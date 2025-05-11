export function renderPagination({
  data, 
  containerSelector, 
  paginationWrapperSelector, 
  prevBtnSelector, 
  nextBtnSelector, 
  renderFunction, 
  itemsKey, 
  itemsPerPage = 5
}) {
  const container = document.querySelector(containerSelector);
  const paginationWrapper = document.querySelector(paginationWrapperSelector);
  const prevButton = document.querySelector(prevBtnSelector);
  const nextButton = document.querySelector(nextBtnSelector);

  let items = data[itemsKey];
  let currentPage = 1;
  let totalPages = Math.ceil(items.length / itemsPerPage);
  
  function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    const pageButtonsContainer = paginationWrapper.querySelector('.pageButtons');
    pageButtonsContainer.innerHTML = '';

     for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.classList.add('page-button', `page${i}`);
      pageButton.textContent = i;
      if(i === currentPage) {
        pageButton.classList.add('active');
      } else {
        pageButton.classList.remove('active');
      }

      pageButtonsContainer.appendChild(pageButton);
    }
  }
  
  function cardsAnimation() {
    container.classList.remove('animate');
    void container.offsetWidth;
    container.classList.add('animate');
  }

  function renderPage() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = items.slice(start, end);
    renderFunction(itemsToShow, container);
  }

  function reRender(newItems) {
    items = newItems;
    totalPages = Math.ceil(items.length / itemsPerPage);
    currentPage = 1;
    renderPage();
    updatePaginationButtons();
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
      updatePaginationButtons();
      cardsAnimation();
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
      updatePaginationButtons();
      cardsAnimation();
    }
  });
  
  function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    currentPage = pageNumber;
    renderPage();
    updatePaginationButtons();
    cardsAnimation();  
  }
  
  paginationWrapper.addEventListener('click', function(e) {
    let clickedPage; 
    if(e.target.classList.contains('page-button')) {
      clickedPage = Number(e.target.textContent);
      goToPage(clickedPage);
    }
    
  });
  
  renderPage();
  updatePaginationButtons();

  return { reRender }
}