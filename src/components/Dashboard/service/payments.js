import axios from "axios";

const apiPaymentUrl = "http://localhost:8080/api/payment";

export function getPayments() {
  return axios.get(apiPaymentUrl);
}

export function addPayment(payment) {
  return axios.post(apiPaymentUrl, payment);
}

export function getPaymentDetails(id) {
  return axios.get(apiPaymentUrl + "/" + id);
}

export function editPaymentDetails(id, payment) {
  return axios.put(apiPaymentUrl + "/" + id, payment);
}

export function deletePayment(id) {
  return axios.delete(apiPaymentUrl + "/" + id);
}
