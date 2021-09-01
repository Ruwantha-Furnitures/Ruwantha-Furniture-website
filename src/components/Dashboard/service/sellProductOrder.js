import axios from "axios";

const apiSellProductOrderUrl = "http://localhost:8080/api/sellProductOrder";

// export function getOrders() {
//   return axios.get(apiOrderUrl);
// }

// export function addOrder(order) {
//   return axios.post(apiOrderUrl, order);
// }

// export function getOrderDetails(id) {
//   return axios.get(apiOrderUrl + "/" + id);
// }

// export function editOrderDetails(id, order) {
//   return axios.put(apiOrderUrl + "/" + id, order);
// }

export function deleteSellProductOrder(id) {
  return axios.delete(apiSellProductOrderUrl + "/" + id);
}
