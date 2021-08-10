import axios from "axios";

const apiSellProductUrl = "http://localhost:8080/api/sellProduct";

export function getSellProducts() {
  return axios.get(apiSellProductUrl);
}

export function addSellProduct(sellProduct) {
  return axios.post(apiSellProductUrl, sellProduct);
}

export function getSellProductDetails(id) {
  return axios.get(apiSellProductUrl + "/" + id);
}

export function editSellProductDetails(id, sellProduct) {
  return axios.put(apiSellProductUrl + "/" + id, sellProduct);
}

export function deleteSellProduct(id) {
  return axios.delete(apiSellProductUrl + "/" + id);
}
