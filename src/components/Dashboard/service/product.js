import axios from "axios";

const apiProductUrl = "http://localhost:8080/api/product";

export function getProducts() {
  return axios.get(apiProductUrl);
}

export function addProduct(product) {
  return axios.post(apiProductUrl, product);
}

export function getProductDetails(id) {
  return axios.get(apiProductUrl + "/" + id);
}

export function editProductDetails(id, product) {
  return axios.put(apiProductUrl + "/" + id, product);
}

// export function deleteStudent(id) {
//   return axios.delete(apiStudentUrl + "/" + id);
// }
