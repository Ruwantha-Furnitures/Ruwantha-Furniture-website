import axios from "axios";

const apiProductTypeUrl = "http://localhost:8080/api/type";

export function getProductTypes() {
  return axios.get(apiProductTypeUrl);
}