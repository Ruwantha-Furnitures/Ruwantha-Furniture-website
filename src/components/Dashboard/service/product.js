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

// export function editStudentDetails(id, student) {
//   return axios.put(apiStudentUrl + "/" + id, student);
// }

// export function deleteStudent(id) {
//   return axios.delete(apiStudentUrl + "/" + id);
// }
