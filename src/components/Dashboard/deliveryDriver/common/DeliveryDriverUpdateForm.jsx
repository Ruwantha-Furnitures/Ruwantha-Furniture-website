import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import {
  getDeliveryDriverDetails,
  editDeliveryDriverDetails,
} from "./../../service/deliveryDriver";
import {
  getAccountDetails,
  editAccountDetails,
  getAccounts,
} from "./../../service/account";
import Auth from "../../service/auth";

function DeliveryDriverUpdateForm() {
  const url = window.location.pathname.split("/");
  const driverProfileSet = url[2];
  const user = Auth.getCurrentUser();

  const { id } = useParams();

  const [deliveryDriver, setDeliveryDriver] = useState({
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
    availabilty: 0,
    account: {
      email: "",
    },
  });

  const [accountsData, setAccountsData] = useState({
    id: 0,
    email: "",
  });

  const [account, setAccount] = useState({
    id: 0,
    email: "",
    password: "",
    user_level: 0,
  });

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const loadDeliveryDriver = async () => {
    try {
      const result = await getDeliveryDriverDetails(id);
      const driver = result.data;
      const account_id = driver.account.id;
      const resultAccount = await getAccountDetails(account_id);
      const resultAccounts = await getAccounts();
      setAccountsData(resultAccounts.data);
      setDeliveryDriver(driver);
      setAccount(resultAccount.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    address: Joi.string().required().label("Address"),
    telephone: Joi.string().required().length(10).label("Number"),
    email: Joi.string().required().email().label("Email"),
  };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation
    const errorMessage = validateInput(e.target);
    if (errorMessage) {
      newErrors[e.target.name] = errorMessage;
    } else {
      if (e.target.name === "email") {
        var new_email = e.target.value;
        var account_data = accountsData.filter(
          (accountData) =>
            accountData.email === new_email && accountData.id !== account.id
        );
        console.log(account_data);
        console.log(Object.keys(account_data).length);
        if (Object.keys(account_data).length !== 0) {
          newErrors[e.target.name] =
            '"Email" is already exist use another email';
        } else {
          delete newErrors[e.target.name];
        }
      } else {
        delete newErrors[e.target.name];
      }
    }

    console.log(newErrors);
    setErrors(newErrors);
    if (e.target.name === "email") {
      setAccount({ ...account, [e.target.name]: e.target.value });
    } else {
      setDeliveryDriver({ ...deliveryDriver, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      const responseAccount = await editAccountDetails(account.id, account);
      const responseDeliveryDriver = await editDeliveryDriverDetails(
        id,
        deliveryDriver
      );
      if (user === "Delivery Driver") {
        localStorage.setItem("userEmail", account.email);
        window.location = `/dashboard/deliveryDriverProfile`;
      } else {
        window.location = `/dashboard/deliveryDriver/view/${id}`;
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  console.log(typeof deliveryDriver.telephone);
  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Update Delivery Driver
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to={
                driverProfileSet === "deliveryDriverProfile"
                  ? "/dashboard/deliveryDriverProfile"
                  : "/dashboard/deliveryDrivers"
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
                <div className={ProductViewFormStyle.backButtonStyle}>Back</div>
              </div>
            </Link>
          </div>
        </div>
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
                  errors["last_name"] || errors["first_name"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={deliveryDriver.first_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Driver First Name"
                      className={ProductViewFormStyle.inputStyle}
                      required
                    />
                  </div>
                  {errors["first_name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["first_name"]}
                      </span>
                    </div>
                  )}
                </div>

                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={deliveryDriver.last_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Driver Last Name"
                      className={ProductViewFormStyle.inputStyle}
                      required
                    />
                  </div>
                  {errors["last_name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["last_name"]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["email"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSideLong}>
                  <div className={ProductViewFormStyle.dataforLong}>
                    <label className={ProductViewFormStyle.labelStyleforLong}>
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={account.email}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Delivery Driver Email"
                      className={ProductViewFormStyle.inputStyleforLong}
                      required
                    />
                  </div>
                  {errors["email"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["email"]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["address"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.dataforLong}>
                  <label className={ProductViewFormStyle.labelStyleforLong}>
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={deliveryDriver.address}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Delivery Driver Address"
                    className={ProductViewFormStyle.inputStyleforLong}
                    required
                  />
                </div>
                {errors["address"] && (
                  <div className={ProductViewFormStyle.inputErrorDesc}>
                    <span
                      className={
                        "material-icons " + ProductViewFormStyle.iconWidth
                      }
                    >
                      error
                    </span>
                    <span className={ProductViewFormStyle.inputErrorText}>
                      {errors["address"]}
                    </span>
                  </div>
                )}
              </div>
              <div
                className={
                  errors["telephone"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Number
                    </label>
                    <input
                      type="text"
                      name="telephone"
                      value={deliveryDriver.telephone}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Driver Contact Number"
                      className={ProductViewFormStyle.inputStyle}
                      required
                    />
                  </div>
                  {errors["telephone"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["telephone"]}
                      </span>
                    </div>
                  )}
                </div>

                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Availability
                  </label>
                  <input
                    type="text"
                    value={deliveryDriver.availability === 1 ? "TRUE" : "FALSE"}
                    placeholder="Basic Payment"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
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
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.successButtonColor
              }
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverUpdateForm;
