export function fetchData() {
    return fetch('assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            return data;
            //   sliderData = data.sliderCardData;
            //   UpdateSlideCardContent(currentSlide);
    
            //   propertiesForSaleCards(data);
            //   propertiesForRentCards(data);
            //   renderPopularPlacesContent(data);
            //   renderAgentsContent(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }