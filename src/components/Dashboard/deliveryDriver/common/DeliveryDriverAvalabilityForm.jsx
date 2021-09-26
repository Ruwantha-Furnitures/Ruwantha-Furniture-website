import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import Auth from "../../service/auth";
import {
  editDeliveryDriverDetails,
  getDeliveryDrivers,
} from "./../../service/deliveryDriver";

import { ToastContainer } from "react-toastify";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";
import { notification } from "../../utils/notification";

function DeliveryDriverAvalabilityForm() {
  const user_email = Auth.getCurrentUserEmail();
  const [loading, setLoading] = useState(false);
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
    availability: 1,
  });

  const [errors, setErrors] = useState({
    availability: "",
  });

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const schema = {
    availability: Joi.number().min(0).required(),
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const loadDeliveryDriver = async () => {
    try {
      setLoading(true);
      const result = await getDeliveryDrivers();
      if (result.status === 200) {
        setLoading(false);
      }

      // console.log(resultCategories.data);
      const drivers = result.data;

      const driver = drivers.filter(
        (driver) => driver.account.email === user_email
      )[0];

      setDeliveryDriver(driver);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: parseInt(value) };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    const errorMessage = validateInput(e.target);
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];
    setErrors(newErrors);
    setDeliveryDriver({ ...deliveryDriver, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmit(true);
      const response = await editDeliveryDriverDetails(
        deliveryDriver.id,
        deliveryDriver
      );
      notification(
        "Change the Availability Status",
        "/dashboard/deliveryDriverProfile"
      );
      // window.location = "/dashboard/deliveryDriverProfile";
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  console.log("DeliveryDriver", deliveryDriver);

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div>
            <h1 className={ProductViewFormStyle.titleStyle}>
              Delivery Driver Availability
            </h1>
          </div>
          <form
            onSubmit={(e) => onSubmit(e)}
            className={ProductViewFormStyle.formStyle}
          >
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
                        placeholder="Delivery Driver Email"
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
                      {/* Drivers filter by area and according to avaliable status */}
                      <select
                        className={ProductViewFormStyle.inputFormSelectStyle}
                        name="availability"
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Select Availablity</option>
                        <option value="1">Available</option>
                        <option value="0">Not Availabile</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={ProductViewFormStyle.descButtonsAdd}>
              <div className={ProductViewFormStyle.descButtonAdd}>
                <button
                  disabled={
                    Object.keys(errors).length === 0 && isSubmit === false
                      ? false
                      : true
                  }
                  className={ProductViewFormStyle.descButtonAddStyle}
                >
                  Change Availabilty
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </>
      )}
    </React.Fragment>
  );
}

export default DeliveryDriverAvalabilityForm;
