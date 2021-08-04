import axios from "axios";

const apiProductUrl = "http://localhost:8080/api/product";

export function addProduct(product) {
  return axios.post(apiProductUrl, product);
}
