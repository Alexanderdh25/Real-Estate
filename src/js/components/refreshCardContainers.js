let cachedData = null;
let saleFn = null;
let rentFn = null;

export function initRefreshContainers({ data, reRenderSale, reRenderRent }) {
  cachedData = data;
  saleFn = reRenderSale;
  rentFn = reRenderRent;
}

export function refreshContainersAfterLogin() {
  if (saleFn && cachedData?.villasForSale) saleFn(cachedData.villasForSale);
  if (rentFn && cachedData?.villasForRent) rentFn(cachedData.villasForRent);
}
