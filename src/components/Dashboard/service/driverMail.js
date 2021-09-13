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

export function sendMailToDriver(id, mailData) {
  return axios.put(apiDriverMailUrl + "/" + id, mailData);
}

// export function deleteAccount(id) {
//   return axios.delete(apiAccountUrl + "/" + id);
// }
