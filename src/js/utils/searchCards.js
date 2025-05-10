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

    searchInput.addEventListener('input', function() {
        clearTimeout(timeout);
        const searchQuery = this.value.toLowerCase();
        //Debouncing - limit the number of times the search function is triggered by delaying the search until the user stops typing for a certain period of time
        timeout = setTimeout(() => {
            const filteredItems = items.filter(item => 
                item.propertyTitle.toLowerCase().includes(searchQuery) || 
                item.propertyLocation.toLowerCase().includes(searchQuery)
            );
            reRenderFunction(filteredItems);
        }, 300)
    });

    clearSearchInput.addEventListener('click', function(e) {
        const items = data[itemsKey];
        e.preventDefault();
        
        searchInput.value = '';
        reRenderFunction(items);
    });
}