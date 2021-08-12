import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import Auth from "../../service/auth";
import {
  editDeliveryDriverDetails,
  getDeliveryDrivers,
} from "./../../service/deliveryDriver";

function DeliveryDriverAvalabilityForm() {
  const user_email = Auth.getCurrentUserEmail();

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
    availability: 0,
  });

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const loadDeliveryDriver = async () => {
    try {
      const result = await getDeliveryDrivers();

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

  const onInputChange = (e) => {
    setDeliveryDriver({ ...deliveryDriver, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await editDeliveryDriverDetails(
        deliveryDriver.id,
        deliveryDriver
      );

      window.location = "/dashboard/deliveryDriverProfile";

      console.log(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  // console.log(user_email);
  console.log(deliveryDriver);
  return (
    <React.Fragment>
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
                    Phone
                  </label>
                  <input
                    type="text"
                    value={deliveryDriver.telephone}
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
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Change Availabilty
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverAvalabilityForm;
