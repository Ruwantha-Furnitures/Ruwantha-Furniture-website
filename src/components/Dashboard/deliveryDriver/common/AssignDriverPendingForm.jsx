import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails } from "./../../service/order";
import { getSellProducts } from "./../../service/sellProduct";
import { getDeliveryDrivers } from "./../../service/deliveryDriver";
import {
  addDelivery,
  editDeliveryDetails,
  getDeliveries,
} from "../../service/delivery";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";
import { sendMailToDriver } from "../../service/driverMail";

function AssignDriverPendingForm() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [bill, setBill] = useState({
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
    total_amount: 0,
    date: "",
  });

  const [order, setOrder] = useState({
    total_amount: 0,
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: "",
    },
    payment_method: "ONLINE",
    createdAt: "",
  });

  const [drivers, setDrivers] = useState({});
  const [delivery, setDelivery] = useState({
    order_id: parseInt(id),
    delivery_driver_id: 0,
    deliveryDriver: {
      first_name: "",
      last_name: "",
    },
  });

  const [old_driver_id, setOldDriverId] = useState("");

  const [errors, setErrors] = useState({
    delivery_driver_id: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const schema = {
    delivery_driver_id: Joi.number().min(1).required().label("Charge"),
  };

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      // get invoice data
      setLoading(true);
      const resultOrder = await getOrderDetails(id);
      const resultSellProducts = await getSellProducts();
      const resultDrivers = await getDeliveryDrivers();
      const resultDeliveries = await getDeliveries();

      if (
        resultOrder.status === 200 &&
        resultSellProducts.status === 200 &&
        resultDrivers.status === 200 &&
        resultDeliveries.status === 200
      ) {
        setLoading(false);
      }

      const order_details = resultOrder.data;
      // console.log(resultOrder.data);
      setOrder(order_details);
      // get order data according to invoice

      // console.log(resultSellProducts.data);
      const sellProductsData = resultSellProducts.data.filter(
        (sellProductItem) => sellProductItem.order_id == id
      );
      // setSellProducts(sellProductsData);
      // console.log(sellProductsData);
      var numOfProducts = 0;
      var totalPriceOfProducts = 0;
      var totalAmountOfProducts = 0;
      var totalDiscount = 0;

      sellProductsData.forEach((sellProductItem) => {
        numOfProducts = numOfProducts + 1;
        totalPriceOfProducts =
          totalPriceOfProducts +
          parseInt(sellProductItem.product.price) *
            parseInt(sellProductItem.quantity);
        totalAmountOfProducts =
          totalAmountOfProducts + parseInt(sellProductItem.price);
      });

      totalDiscount =
        ((totalPriceOfProducts - totalAmountOfProducts) /
          totalPriceOfProducts) *
        100;

      var discountofSellProducts = Math.round(totalDiscount);
      setBill({
        ...bill,
        no_of_products: numOfProducts,
        products_price: totalPriceOfProducts.toFixed(2),
        total_discounts: discountofSellProducts,
        total_amount: totalAmountOfProducts.toFixed(2),
        date: order_details.createdAt,
      });

      // load drivers

      const driversData = resultDrivers.data.filter(
        (driver) => driver.availability === 1
      );
      setDrivers(driversData);

      // set delivery data
      const deliveries = resultDeliveries.data;
      const order_delivery = deliveries.filter(
        (delivery) => delivery.order_id === parseInt(id)
      )[0];
      //   console.log(order_delivery);
      setDelivery(order_delivery);
      setOldDriverId(order_delivery.delivery_driver_id);
    } catch (error) {
      console.log("Error", error.message);
    }
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
      console.log("Value", e.target.value);
      if (
        e.target.name === "delivery_driver_id" &&
        parseInt(e.target.value) === parseInt(old_driver_id)
      ) {
        newErrors[e.target.name] = "Select New Driver";
      } else {
        delete newErrors[e.target.name];
      }
    }

    // console.log(newErrors);
    setErrors(newErrors);
    setDelivery({ ...delivery, [e.target.name]: parseInt(e.target.value) });
  };

  const handleAssignDriverProcess = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log("Driver Id", old_driver_id);
    if (delivery.delivery_driver_id !== 0) {
      console.log("New", delivery);
      var today = new Date();
      const new_delivery = {
        ...delivery,
        createdAt: today.toISOString(),
      };

      console.log("New_One", new_delivery);

      const old_driver = drivers.filter((driver)=> driver.id === parseInt(old_driver_id))[0];
      const old_driver_email = old_driver.account.email;

      const new_driver = drivers.filter((driver)=> driver.id === parseInt(delivery.delivery_driver_id))[0];
      const new_driver_email = new_driver.account.email;

      if(new_driver_email !== undefined && old_driver_email !== undefined) {
        const old_msg_level = 2;
        const new_msg_level = 1;
        const order_id = parseInt(id);

        const new_driver_mail = {
          email: new_driver_email,
          order_id: order_id
        }

        const resultNewDriverMail = await sendMailToDriver(new_msg_level, new_driver_mail);

        const old_driver_mail = {
          email: old_driver_email,
          order_id: order_id
        }
        const resultOldDriverMail = await sendMailToDriver(old_msg_level, old_driver_mail);
      }

      const result = await editDeliveryDetails(new_delivery.id, new_delivery);

      window.location = "/dashboard/trackingOrders";
    }
  };

  // console.log("Order", order);
  // console.log("Bill", bill);
  //   console.log("Delivery", Array.isArray(delivery));
  console.log(errors);

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div>
            <div className={ProductViewFormStyle.titleHeader}>
              <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
                Reassign Drivers Page
              </h1>
              <div className={ProductViewFormStyle.backSection}>
                <div className={ProductViewFormStyle.back}>
                  <Link
                    to="/dashboard/trackingOrders"
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
              </div>
            </div>
          </div>
          <form action="#" className={ProductViewFormStyle.formStyle}>
            <div className={ProductViewFormStyle.details}>
              <div className={ProductViewFormStyle.infoPart}>
                <div className={ProductViewFormStyle.form}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Amount Details
                  </h1>
                  <div
                    className={
                      ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        No Products
                      </label>
                      <input
                        type="text"
                        value={bill.no_of_products}
                        placeholder="Number of Products"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Items Price
                      </label>
                      <input
                        type="text"
                        value={"Rs. " + bill.products_price}
                        placeholder="Product(s) Price"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Order Date
                      </label>
                      <input
                        type="text"
                        value={bill.date.split("T")[0]}
                        placeholder="Total Discount"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Amount
                      </label>
                      <input
                        type="text"
                        value={"Rs. " + bill.total_amount}
                        placeholder="Total Amount"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={ProductViewFormStyle.details}>
              <div className={ProductViewFormStyle.infoPart}>
                <div className={ProductViewFormStyle.form}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Customer Details
                  </h1>
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
                        value={order.customer.first_name}
                        placeholder="Customer First Name"
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
                        value={order.customer.last_name}
                        placeholder="Customer Last Name"
                        className={ProductViewFormStyle.inputStyle}
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
                        value={order.customer.address}
                        placeholder="Customer Dilever Address"
                        className={ProductViewFormStyle.inputStyleforLong}
                        readOnly
                      />
                    </div>
                  </div>
                  <div
                    className={
                      errors["delivery_driver_id"] || errors["area"]
                        ? ProductViewFormStyle.formLineError
                        : ProductViewFormStyle.formLine
                    }
                  >
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Tel No
                      </label>
                      <input
                        type="text"
                        value={"0" + order.customer.contact_number}
                        placeholder="Customer Number"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.inputFormSide}>
                      <div className={ProductViewFormStyle.dataForm}>
                        <label className={ProductViewFormStyle.labelStyle}>
                          Delivery
                        </label>
                        {/* Drivers filter by area and according to avaliable status */}
                        <select
                          className={ProductViewFormStyle.inputFormSelectStyle}
                          name="delivery_driver_id"
                          onChange={(e) => onInputChange(e)}
                          required
                        >
                          <>
                            {delivery.delivery_driver_id !== null ? (
                              <option value={old_driver_id}>
                                {delivery.deliveryDriver.first_name +
                                  " " +
                                  delivery.deliveryDriver.last_name}
                              </option>
                            ) : (
                              <option value="0">Select Type</option>
                            )}
                          </>

                          {Array.isArray(drivers) === true && (
                            <React.Fragment>
                              {drivers.map((driver, index) => (
                                <option key={index} value={driver.id}>
                                  {driver.first_name + " " + driver.last_name}
                                </option>
                              ))}
                            </React.Fragment>
                          )}
                        </select>
                        {errors["delivery_driver_id"] && (
                          <div className={ProductViewFormStyle.inputErrorDesc}>
                            <span
                              className={
                                "material-icons " +
                                ProductViewFormStyle.iconWidth
                              }
                            >
                              error
                            </span>
                            <span
                              className={ProductViewFormStyle.inputErrorText}
                            >
                              "Driver" is not allowed to reassign!!
                            </span>
                          </div>
                        )}
                      </div>
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
                  onClick={(e) => handleAssignDriverProcess(e)}
                >
                  Assign Driver
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </React.Fragment>
  );
}

export default AssignDriverPendingForm;
