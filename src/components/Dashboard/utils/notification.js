import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import MainStyle from "../../../css/dashboard/Main.module.css";

export function notification(msg, location) {
  return toast.success(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    style: {
      color: "#be622e",
      borderRadius: "22px",
    },
    className: MainStyle.root,
    progressStyle: { backgroundColor: "#be622e" },
    onClose: () => (window.location = location),
  });
}
