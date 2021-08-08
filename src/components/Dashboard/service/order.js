import axios from "axios";

const apiOrderUrl = "http://localhost:8080/api/order";

export function getOrders() {
  return axios.get(apiOrderUrl);
}

export function addOrder(order) {
  return axios.post(apiOrderUrl, order);
}

export function getOrderDetails(id) {
  return axios.get(apiOrderUrl + "/" + id);
}

// export function editProductDetails(id, product) {
//   return axios.put(apiOrderUrl + "/" + id, product);
// }

// export function deleteProduct(id) {
//   return axios.delete(apiOrderUrl + "/" + id);
// }
