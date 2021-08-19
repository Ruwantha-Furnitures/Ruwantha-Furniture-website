import axios from "axios";

const apiDeliveryUrl = "http://localhost:8080/api/deliveryCharge";

export function getDeliveryCharges() {
  return axios.get(apiDeliveryUrl);
}

export function addDeliveryCharge(charge) {
  return axios.post(apiDeliveryUrl, charge);
}

export function getDeliveryChargeDetails(id) {
  return axios.get(apiDeliveryUrl + "/" + id);
}

export function editDeliveryChargeDetails(id, charge) {
  return axios.put(apiDeliveryUrl + "/" + id, charge);
}

export function deleteDeliveryCharge(id) {
  return axios.delete(apiDeliveryUrl + "/" + id);
}
