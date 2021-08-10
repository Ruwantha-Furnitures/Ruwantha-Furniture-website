import axios from "axios";

const apiAccountUrl = "http://localhost:8080/api/account";

export function getAccounts() {
  return axios.get(apiAccountUrl);
}

export function addAccount(account) {
  return axios.post(apiAccountUrl, account);
}

export function getAccountDetails(id) {
  return axios.get(apiAccountUrl + "/" + id);
}

export function editAccountDetails(id, account) {
  return axios.put(apiAccountUrl + "/" + id, account);
}

export function deleteAccount(id) {
  return axios.delete(apiAccountUrl + "/" + id);
}
