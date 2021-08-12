import axios from "axios";

const apiDeliveryDriverUrl = "http://localhost:8080/api/deliveryDriver";

export function getDeliveryDrivers() {
  return axios.get(apiDeliveryDriverUrl);
}

export function addDeliveryDriver(deliveryDriver) {
  return axios.post(apiDeliveryDriverUrl, deliveryDriver);
}

export function getDeliveryDriverDetails(id) {
  return axios.get(apiDeliveryDriverUrl + "/" + id);
}

export function editDeliveryDriverDetails(id, deliveryDriver) {
  return axios.put(apiDeliveryDriverUrl + "/" + id, deliveryDriver);
}

export function deleteDeliveryDriver(id) {
  return axios.delete(apiDeliveryDriverUrl + "/" + id);
}
