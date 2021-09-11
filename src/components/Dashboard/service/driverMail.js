import axios from "axios";

const apiDriverMailUrl = "http://localhost:8080/api/driverMail";

// export function getAccounts() {
//   return axios.get(apiAccountUrl);
// }

export function addDriverEmail(emailData) {
  return axios.post(apiDriverMailUrl, emailData);
}

// export function getAccountDetails(id) {
//   return axios.get(apiAccountUrl + "/" + id);
// }

// export function editAccountDetails(id, account) {
//   return axios.put(apiAccountUrl + "/" + id, account);
// }

// export function deleteAccount(id) {
//   return axios.delete(apiAccountUrl + "/" + id);
// }
