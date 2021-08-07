import axios from "axios";

const apiProductCategoryUrl = "http://localhost:8080/api/category";

export function getProductCategories() {
  return axios.get(apiProductCategoryUrl);
}
