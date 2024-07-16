const fetchProducts = async (endpoint) => {
  const organizationId = process.env.NEXT_PUBLIC_TIMBU_ORG_ID;
  const appId = process.env.NEXT_PUBLIC_TIMBU_APP_ID;
  const apiKey = process.env.NEXT_PUBLIC_TIMBU_API_KEY;

  const response = await fetch(
    `${endpoint}?organization_id=${organizationId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`
  );
  const data = await response.json();
  return data.items || [];
};

export const getBestSellers = () => fetchProducts("/api/best-sellers");
export const getNewArrivals = () => fetchProducts("/api/new-arrivals");
export const getOnSale = () => fetchProducts("/api/on-sale");
export const getProductById = (id) => fetchProducts(`/api/product/${id}`);
