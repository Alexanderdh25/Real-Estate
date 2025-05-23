export function searchCardInput({
    data, 
    searchInputSelector, 
    itemsKey, 
    clearButton, 
    reRenderFunction
}) {
    const searchInput = document.querySelector(searchInputSelector);
    const clearSearchInput = document.querySelector(clearButton);
    const items = data[itemsKey];
    let timeout;

    function hideClearButton() {
        clearSearchInput.style.display = 'none';
    }

    searchInput.addEventListener('input', function() {
        clearTimeout(timeout);
        const searchQuery = this.value.toLowerCase();
        //Debouncing - limit the number of times the search function is triggered by delaying the search until the user stops typing for a certain period of time
        timeout = setTimeout(() => {
            // if(searchInput.value.length > 0 && window.innerWidth < 768) only for mobile
            if(searchInput.value.length > 0 && window.innerWidth < 768) clearSearchInput.style.display = 'block';
            else hideClearButton()

            const filteredItems = items.filter(item => 
                item.propertyTitle.toLowerCase().includes(searchQuery) || 
                item.propertyLocation.toLowerCase().includes(searchQuery)
            );
            reRenderFunction(filteredItems);
        }, 200)
    });

    clearSearchInput.addEventListener('click', function(e) {
        const items = data[itemsKey];
        e.preventDefault();
        
        searchInput.value = '';
        reRenderFunction(items);
        hideClearButton()
    });
}