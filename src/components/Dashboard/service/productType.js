import axios from "axios";

const apiProductTypeUrl = "http://localhost:8080/api/type";

export function getProductTypes() {
  return axios.get(apiProductTypeUrl);
}

// export function addProductCategories(category) {
//   return axios.post(apiProductCategoryUrl, category);
// }

// export function getProductCategoriesDetails(id) {
//   return axios.get(apiProductCategoryUrl + "/" + id);
// }

// export function editProductCategoriesDetails(id, category) {
//   return axios.put(apiProductCategoryUrl + "/" + id, category);
// }

// export function deleteProductCategoriesDetails(id) {
//   return axios.delete(apiProductCategoryUrl + "/" + id);
// }
