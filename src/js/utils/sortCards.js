export function sortCards({
    data,
    sortVillasButton,
    itemsKey,
    resetButton,
    reRenderFunction
}) {
   const sortButton = document.querySelector(sortVillasButton);
   const resetSortButton = document.querySelector(resetButton);
   let sortAscending = false;
   
   sortButton.addEventListener('click', function() {
    const items = data[itemsKey].slice();
    items.sort((a,b) => {
        return sortAscending ? a.propertyPrice - b.propertyPrice : b.propertyPrice - a.propertyPrice;
    });

    sortAscending = !sortAscending;
    reRenderFunction(items);
   });

   resetSortButton.addEventListener('click', function() {
    const items = data[items]
    reRenderFunction(items);
    sortAscending = false;
   })
}