import axios from "axios";

const apiProductTypeUrl = "http://localhost:8080/api/type";

export function getProductTypes() {
  return axios.get(apiProductTypeUrl);
}

export function addProductType(type) {
  return axios.post(apiProductTypeUrl, type);
}

// export function getProductCategoriesDetails(id) {
//   return axios.get(apiProductTypeUrl + "/" + id);
// }

// export function editProductCategoriesDetails(id, category) {
//   return axios.put(apiProductTypeUrl + "/" + id, category);
// }

// export function deleteProductCategoriesDetails(id) {
//   return axios.delete(apiProductTypeUrl + "/" + id);
// }
