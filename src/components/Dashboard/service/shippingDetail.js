import axios from "axios";

const apiShippingUrl = "http://localhost:8080/api/shippingDetail";

export function getShippings() {
  return axios.get(apiShippingUrl);
}

export function addShipping(shipping) {
  return axios.post(apiShippingUrl, shipping);
}

export function getShippingDetails(id) {
  return axios.get(apiShippingUrl + "/" + id);
}

export function editShippingDetails(id, shipping) {
  return axios.put(apiShippingUrl + "/" + id, shipping);
}

export function deleteShipping(id) {
  return axios.delete(apiShippingUrl + "/" + id);
}
