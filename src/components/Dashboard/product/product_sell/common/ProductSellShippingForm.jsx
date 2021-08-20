import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { addCustomer } from "../../../service/customer";
import { addOrder } from "../../../service/order";
import { getOrderDetails } from "./../../../service/order";
import { getDeliveryCharges } from "./../../../service/deliveryCharges";
import { addShipping } from "../../../service/shippingDetail";
import { addPayment } from "../../../service/payments";

function ProductSellShippingForm() {
  const { id } = useParams();

  const [shippingDetails, setShippingDetails] = useState({
    first_name: "",
    last_name: "",
    shipping_address: "",
    contact_number: "",
    order_id: 0,
    charge_id: 0,
    total_product_amount: 0,
    total_amounts: 0,
  });

  const [deliveryCharges, setDeliveryCharges] = useState({
    id: 0,
    area: "",
    amount: 0,
  });

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      //   load the order
      const resultOrder = await getOrderDetails(id);
      const order = resultOrder.data;
      const newShippingDetails = {
        first_name: order.customer.first_name,
        last_name: order.customer.last_name,
        shipping_address: order.customer.address,
        contact_number: order.customer.contact_number,
        order_id: id,
        charge_id: 0,
        total_product_amount: order.total_product_amount,
        total_amounts: order.total_product_amount,
      };
      setShippingDetails(newShippingDetails);

      //  load the delivery charges
      const resultDeliveryCharges = await getDeliveryCharges();
      setDeliveryCharges(resultDeliveryCharges.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  //   const payment_method = "CASH";

  const onInputChange = (e) => {
    if (e.target.name === "area") {
      if (e.target.value > 0) {
        var new_charge_id = e.target.value;
        var charge = deliveryCharges.filter(
          (charge) => charge.id === parseInt(new_charge_id)
        )[0];
        let charge_amount = charge.amount;
        let new_total_amounts = (
          parseInt(shippingDetails.total_product_amount) +
          parseInt(charge_amount)
        ).toFixed(2);

        setShippingDetails({
          ...shippingDetails,
          total_amounts: new_total_amounts,
          charge_id: new_charge_id,
        });
        console.log(new_total_amounts);
      } else {
        let new_total_amounts = shippingDetails.total_product_amount;
        setShippingDetails({
          ...shippingDetails,
          total_amounts: new_total_amounts,
          charge_id: 0,
        });
      }
    } else {
      setShippingDetails({
        ...shippingDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (shippingDetails.charge_id > 0) {
      try {
        // create shipping address data in the table
        const new_shipping_details = {
          first_name: shippingDetails.first_name,
          last_name: shippingDetails.last_name,
          shipping_address: shippingDetails.shipping_address,
          contact_number: shippingDetails.contact_number,
          order_id: shippingDetails.order_id,
          charge_id: shippingDetails.charge_id,
        };
        const responseShipping = await addShipping(new_shipping_details);

        //   add payment to the table
        const newPayment = {
          order_id: id,
          total_amounts: shippingDetails.total_amounts,
        };
        const responsePayment = await addPayment(newPayment);
        window.location = "/dashboard/purchaseOrders";
      } catch (error) {
        if (error.response.status === 500) {
          console.log("There was a problem with the server: ", error);
        } else {
          console.log(error.response.data.msg);
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Product Sell Page - Shipping
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
                    value={shippingDetails.first_name}
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
                    value={shippingDetails.last_name}
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
                    value={shippingDetails.shipping_address}
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
                    value={shippingDetails.contact_number}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Customer Number"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Location
                  </label>
                  {/* Drivers filter by area and according to avaliable status */}
                  <select
                    className={ProductViewFormStyle.inputFormSelectStyle}
                    name="area"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="0">Select Area</option>
                    {Array.isArray(deliveryCharges) === true && (
                      <React.Fragment>
                        {deliveryCharges.map((deliveryCharge, index) => (
                          <option key={index} value={deliveryCharge.id}>
                            {deliveryCharge.area}
                          </option>
                        ))}
                      </React.Fragment>
                    )}
                  </select>
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Amount
                  </label>
                  <input
                    type="number"
                    name="contact_number"
                    value={shippingDetails.total_product_amount}
                    placeholder="Customer Number"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Total
                  </label>
                  <input
                    type="number"
                    name="contact_number"
                    value={shippingDetails.total_amounts}
                    placeholder="Customer Number"
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
              Finish Pay
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellShippingForm;
