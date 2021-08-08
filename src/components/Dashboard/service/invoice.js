import axios from "axios";

const apiInvoiceUrl = "http://localhost:8080/api/invoice";

export function getInvoices() {
  return axios.get(apiInvoiceUrl);
}

export function addInvoice(invoice) {
  return axios.post(apiInvoiceUrl, invoice);
}

export function getInvoiceDetails(id) {
  return axios.get(apiInvoiceUrl + "/" + id);
}

export function editInvoiceDetails(id, invoice) {
  return axios.put(apiInvoiceUrl + "/" + id, invoice);
}

export function deleteInvoice(id) {
  return axios.delete(apiInvoiceUrl + "/" + id);
}
