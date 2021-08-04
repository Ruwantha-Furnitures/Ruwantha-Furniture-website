import axios from "axios";

const apiImageUrl = "http://localhost:8080/api/image";

export function uploadPhoto(image, data) {
  return axios.post(apiImageUrl, image, data);
}
