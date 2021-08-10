import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { addCustomer } from "../../../service/customer";
import { addOrder } from "../../../service/order";

function ProductSellForm() {
  const [customer, setCustomer] = useState({
    first_name: "",
    last_name: "",
    address: "",
    contact_number: "",
    payment_method: "CASH",
  });

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCustomer(customer);
      const customerId = response.data.id;
      const order = {
        customer_id: customerId,
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
                    name="first_name"
                    value={customer.first_name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Customer First Name"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
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
              </div>
              <div className={ProductViewFormStyle.formLine}>
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
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Number
                  </label>
                  <input
                    type="number"
                    name="contact_number"
                    value={customer.contact_number}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Customer Number"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Payment
                  </label>
                  <input
                    type="text"
                    name="payment_method"
                    value={customer.payment_method}
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
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Sell Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellForm;
