import axios from "axios";

const apiDriverMailUrl = "http://localhost:8080/api/driverMail";

export function addDriverEmail(emailData) {
  return axios.post(apiDriverMailUrl, emailData);
}

export function sendMailToDriver(id, mailData) {
  return axios.put(apiDriverMailUrl + "/" + id, mailData);
}
