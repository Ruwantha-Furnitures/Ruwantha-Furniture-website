import axios from "axios";

const apiCustomerUrl = "http://localhost:8080/api/customer";

export function getCustomers() {
  return axios.get(apiCustomerUrl);
}

export function addCustomer(customer) {
  return axios.post(apiCustomerUrl, customer);
}

// export function getProductTypeDetails(id) {
//   return axios.get(apiProductTypeUrl + "/" + id);
// }

// export function editProductTypeDetails(id, type) {
//   return axios.put(apiProductTypeUrl + "/" + id, type);
// }

// export function deleteProductTypeDetails(id) {
//   return axios.delete(apiProductTypeUrl + "/" + id);
// }
