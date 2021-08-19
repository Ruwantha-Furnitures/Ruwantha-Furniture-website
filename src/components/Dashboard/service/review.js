import axios from "axios";

const apiReviewUrl = "http://localhost:8080/api/productReview";

export function getReviews() {
  return axios.get(apiReviewUrl);
}

export function addReview(review) {
  return axios.post(apiReviewUrl, review);
}

export function getReviewDetails(id) {
  return axios.get(apiReviewUrl + "/" + id);
}

export function editReviewDetails(id, review) {
  return axios.put(apiReviewUrl + "/" + id, review);
}

export function deleteReview(id) {
  return axios.delete(apiReviewUrl + "/" + id);
}
