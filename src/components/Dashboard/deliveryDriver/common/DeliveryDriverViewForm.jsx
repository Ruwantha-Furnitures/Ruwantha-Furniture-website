import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import Auth from "../../service/auth";
import {
  getDeliveryDriverDetails,
  deleteDeliveryDriver,
  getDeliveryDrivers,
} from "./../../service/deliveryDriver";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";
import { sendMailToDriver } from "../../service/driverMail";
import MainStyle from "../../../../css/dashboard/Main.module.css";

function DeliveryDriverViewForm() {
  const user = Auth.getCurrentUser();
  const [loading, setLoading] = useState(false);
  const url = window.location.pathname.split("/");
  const driverViewLocation = url[3];
  const driverProfileSet = url[2];

  const { id } = useParams();

  const [deliveryDriver, setDeliveryDriver] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
    account: {
      email: "",
    },
    availabilty: 0,
  });

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const [isSubmit, setIsSubmit] = useState(false);

  const loadDeliveryDriver = async () => {
    console.log(id);
    try {
      let drivers = {};
      if (id !== undefined) {
        setLoading(true);
        const result = await getDeliveryDriverDetails(id);
        if (result.status === 200) {
          setLoading(false);
        }

        drivers = result.data;
      } else {
        const user_email = Auth.getCurrentUserEmail();
        setLoading(true);
        const result = await getDeliveryDrivers();
        if (result.status === 200) {
          setLoading(false);
        }
        drivers = result.data.filter(
          (driver) => driver.account.email === user_email
        )[0];
      }

      setDeliveryDriver(drivers);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handleUpdate = () => {
    if (driverProfileSet === "deliveryDriverProfile") {
      window.location = `/dashboard/deliveryDriverProfile/update/${deliveryDriver.id}`;
    } else {
      window.location = `/dashboard/deliveryDriver/update/${deliveryDriver.id}`;
    }
  };

  const handleDelete = async () => {
    try {
      setIsSubmit(true);
      const res = await deleteDeliveryDriver(id);
      toast.success("Delete the Delivery Driver", {
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
        onClose: () => (window.location = "/dashboard/deliveryDrivers"),
      });
      // window.location = "/dashboard/deliveryDrivers";
    } catch (error) {
      console.log("There was a problem with the server: ", error);
    }
  };

  const handleSendMail = async () => {
    try {
      setIsSubmit(true);
      console.log("Submit");
      const driver_mail = {
        email: deliveryDriver.account.email,
        order_id: 0,
      };
      const msg_level = 3;

      const result_mail = await sendMailToDriver(msg_level, driver_mail);

      toast.success("Send Mail to Driver", {
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
        onClose: () => (window.location = "/dashboard/trackingOrders"),
      });
    } catch (error) {
      console.log("There was a problem with the server: ", error);
    }
  };

  console.log(driverProfileSet);
  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div className={ProductViewFormStyle.titleHeader}>
            <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
              Delivery Driver Profile
            </h1>
            <div className={ProductViewFormStyle.backSection}>
              {driverProfileSet !== "deliveryDriverProfile" && (
                <div className={ProductViewFormStyle.back}>
                  <Link
                    to={
                      driverViewLocation === "view"
                        ? driverProfileSet !== "deliveryDriverNotCompleted"
                          ? "/dashboard/deliveryDrivers"
                          : "/dashboard/trackingOrders"
                        : "/dashboard/completedOrders"
                    }
                    className={ProductViewFormStyle.linkStyle}
                  >
                    <div className={ProductViewFormStyle.backStyle}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.backIconStyle
                        }
                      >
                        arrow_back_ios
                      </span>
                      <div className={ProductViewFormStyle.backButtonStyle}>
                        Back
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className={ProductViewFormStyle.details}>
            <div className={ProductViewFormStyle.infoPart}>
              <div className={ProductViewFormStyle.form}>
                <div
                  className={
                    ProductViewFormStyle.formLine +
                    " " +
                    ProductViewFormStyle.setMarginTop
                  }
                >
                  <div className={ProductViewFormStyle.data}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={deliveryDriver.first_name}
                      placeholder="Driver First Name"
                      className={ProductViewFormStyle.inputStyle}
                      readOnly
                    />
                  </div>
                  <div className={ProductViewFormStyle.data}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={deliveryDriver.last_name}
                      placeholder="Driver Last Name"
                      className={ProductViewFormStyle.inputStyle}
                      readOnly
                    />
                  </div>
                </div>
                <div className={ProductViewFormStyle.formLine}>
                  <div className={ProductViewFormStyle.dataforLong}>
                    <label className={ProductViewFormStyle.labelStyleforLong}>
                      Email
                    </label>
                    <input
                      type="text"
                      value={deliveryDriver.account.email}
                      placeholder="Delivery Driver Email"
                      className={ProductViewFormStyle.inputStyleforLong}
                      readOnly
                    />
                  </div>
                </div>
                <div className={ProductViewFormStyle.formLine}>
                  <div className={ProductViewFormStyle.dataforLong}>
                    <label className={ProductViewFormStyle.labelStyleforLong}>
                      Address
                    </label>
                    <input
                      type="text"
                      value={deliveryDriver.address}
                      placeholder="Delivery Driver Address"
                      className={ProductViewFormStyle.inputStyleforLong}
                      readOnly
                    />
                  </div>
                </div>
                <div className={ProductViewFormStyle.formLine}>
                  <div className={ProductViewFormStyle.data}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Tel No
                    </label>
                    <input
                      type="text"
                      value={"0" + deliveryDriver.telephone}
                      placeholder="Driver Contact Number"
                      className={ProductViewFormStyle.inputStyle}
                      readOnly
                    />
                  </div>
                  <div className={ProductViewFormStyle.data}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Availability
                    </label>
                    <input
                      type="text"
                      value={
                        deliveryDriver.availability === 1
                          ? "Available"
                          : "Not Available"
                      }
                      placeholder="Basic Payment"
                      className={ProductViewFormStyle.inputStyle}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {driverViewLocation === "view" && (
            <div className={ProductViewFormStyle.descButtonsAdd}>
              {user === "Owner" && (
                <div className={ProductViewFormStyle.descButtonAdd}>
                  <button
                    className={
                      ProductViewFormStyle.buttonStyle +
                      " " +
                      ProductViewFormStyle.deleteButtonColor
                    }
                    onClick={handleDelete}
                    disabled={isSubmit === false ? false : true}
                  >
                    Delete
                  </button>
                </div>
              )}
              {user === "Admin" &&
                driverProfileSet === "deliveryDriverNotCompleted" && (
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={ProductViewFormStyle.descButtonAddStyle}
                      onClick={handleSendMail}
                      disabled={isSubmit === false ? false : true}
                    >
                      Send Mail
                    </button>
                    <ToastContainer />
                  </div>
                )}
            </div>
          )}
          {driverProfileSet === "deliveryDriverProfile" && (
            <div className={ProductViewFormStyle.descButtonsAdd}>
              <div className={ProductViewFormStyle.descButtonAdd}>
                <button
                  className={
                    ProductViewFormStyle.buttonStyle +
                    " " +
                    ProductViewFormStyle.successButtonColor +
                    " " +
                    ProductViewFormStyle.addRightMargin
                  }
                  onClick={handleUpdate}
                >
                  Go To Update
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </React.Fragment>
  );
}

export default DeliveryDriverViewForm;
