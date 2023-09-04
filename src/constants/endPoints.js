import { API_URL, AUTH_API_URL } from "../config/api";

export const END_POINTS = {
  PRODUCTS: `${API_URL}/products`,
  PRODUCT: `${API_URL}/product`,
  RECOMMENDED_ITEMS: `${API_URL}/recommendedItems`,
  RELATED_PRODUCTS: `${API_URL}/relatedProducts`,
  OFFERS: `${API_URL}/offers`,
  HOME_AND_OUTDOOR: `${API_URL}/HomeAndOutdoor`,
  SUBSCRIPTION: `${API_URL}/subscriptions`,
  LOGIN: `${AUTH_API_URL}/login`,
  SIGNUP: `${AUTH_API_URL}/signup`,
};
