import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { addCustomer } from "../../../service/customer";
import { addOrder } from "../../../service/order";

function ProductSellForm() {
  const [customer, setCustomer] = useState({
    first_name: "",
    last_name: "",
    address: "",
    contact_number: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    address: "",
    contact_number: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    address: Joi.string().required().label("Address"),
    contact_number: Joi.string().required().length(10).label("Number"),
  };

  const payment_method = "CASH";

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
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    console.log(newErrors);
    setErrors(newErrors);
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      const response = await addCustomer(customer);
      const customerId = response.data.id;
      const order = {
        customer_id: customerId,
        payment_method: "CASH",
      };
      const responseOrder = await addOrder(order);
      const id = responseOrder.data.id;
      window.location = `/dashboard/product/sell/product/${id}`;
      console.log(response);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Product Sell Page - Customer
        </h1>
      </div>
      <form
        className={ProductViewFormStyle.formStyle}
        onSubmit={(e) => onSubmit(e)}
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
                      value={customer.first_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Customer First Name"
                      className={ProductViewFormStyle.inputStyle}
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
                      value={customer.last_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Customer Last Name"
                      className={ProductViewFormStyle.inputStyle}
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
                  errors["address"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSideLong}>
                  <div className={ProductViewFormStyle.dataforLong}>
                    <label className={ProductViewFormStyle.labelStyleforLong}>
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={customer.address}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Customer Dilever Address"
                      className={ProductViewFormStyle.inputStyleforLong}
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
              </div>
              <div
                className={
                  errors["contact_number"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Tel No
                    </label>
                    <input
                      type="tel"
                      name="contact_number"
                      value={customer.contact_number}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Customer Number"
                      className={ProductViewFormStyle.inputStyle}
                    />
                  </div>
                  {errors["contact_number"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["contact_number"]}
                      </span>
                    </div>
                  )}
                </div>

                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Payment
                  </label>
                  <input
                    type="text"
                    name="payment_method"
                    value={payment_method}
                    placeholder="Payment Method"
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
              className={ProductViewFormStyle.descButtonAddStyle}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellForm;
