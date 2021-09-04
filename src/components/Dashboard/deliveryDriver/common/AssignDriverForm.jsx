import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails } from "./../../service/order";
import { getSellProducts } from "./../../service/sellProduct";
import { getDeliveryDrivers } from "./../../service/deliveryDriver";
import { addDelivery } from "../../service/delivery";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";

function AssignDriverForm() {
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
    order_id: id,
    delivery_driver_id: 0,
  });

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

      if (
        resultOrder.status === 200 &&
        resultSellProducts.status === 200 &&
        resultDrivers.status === 200
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
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    // console.log(newErrors);
    setErrors(newErrors);
    setDelivery({ ...delivery, [e.target.name]: parseInt(e.target.value) });
  };

  const handleAssignDriverProcess = async (e) => {
    e.preventDefault();
    // console.log("Onsubmit");
    setIsSubmit(true);
    // console.log(delivery);
    if (delivery.delivery_driver_id !== 0) {
      // console.log(delivery);
      const result = await addDelivery(delivery);
      // console.log(result.data);
      window.location = "/dashboard/assignListOrderDriver";
    }
  };

  // console.log("Order", order);
  // console.log("Bill", bill);

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
                Assign Drivers Page
              </h1>
              <div className={ProductViewFormStyle.backSection}>
                <div className={ProductViewFormStyle.back}>
                  <Link
                    to="/dashboard/assignListOrderDriver"
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
                          <option value="0">Select Driver</option>
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
                              "Driver" is not allowed to be empty
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

export default AssignDriverForm;
