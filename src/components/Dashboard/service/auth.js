export function getCurrentUser() {
  const userlevel = localStorage.getItem("userlevel");
  var user;
  if (parseInt(userlevel) === 0) {
    user = "Owner";
  }
  if (parseInt(userlevel) === 2) {
    user = "Admin";
  }
  if (parseInt(userlevel) === 3) {
    user = "Delivery Driver";
  }
  return user;
}

export default {
  getCurrentUser,
};
