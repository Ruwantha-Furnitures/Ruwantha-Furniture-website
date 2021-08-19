import axios from "axios";

const apiDeliveryUrl = "http://localhost:8080/api/delivery";

export function getDeliveries() {
  return axios.get(apiDeliveryUrl);
}

export function addDelivery(delivery) {
  return axios.post(apiDeliveryUrl, delivery);
}

export function getDeliveryDetails(id) {
  return axios.get(apiDeliveryUrl + "/" + id);
}

export function editDeliveryDetails(id, delivery) {
  return axios.put(apiDeliveryUrl + "/" + id, delivery);
}

export function deleteDelivery(id) {
  return axios.delete(apiDeliveryUrl + "/" + id);
}
