import axios from "axios";

const apiProductTypeUrl = "http://localhost:8080/api/type";

export function getProductTypes() {
  return axios.get(apiProductTypeUrl);
}

export function addProductType(type) {
  return axios.post(apiProductTypeUrl, type);
}

export function getProductTypeDetails(id) {
  return axios.get(apiProductTypeUrl + "/" + id);
}

export function editProductTypeDetails(id, type) {
  return axios.put(apiProductTypeUrl + "/" + id, type);
}

export function deleteProductTypeDetails(id) {
  return axios.delete(apiProductTypeUrl + "/" + id);
}
