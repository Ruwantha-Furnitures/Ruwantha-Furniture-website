import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getSellProducts } from "./../../../service/sellProduct";
import { editOrderDetails, getOrderDetails } from "../../../service/order";
import { addPayment } from "../../../service/payments";

function ProductSellAmountForm() {
  const { id } = useParams();

  const [bill, setBill] = useState({
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
    total_amount: 0,
  });

  // orders = sellProduct
  // invoice = invoice
  const [sellProducts, setSellProducts] = useState([]);
  const [order, setOrder] = useState({
    total_amount: 0,
    payment_method: "",
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: "",
    },
  });

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      // get invoice data
      const resultOrder = await getOrderDetails(id);
      setOrder(resultOrder.data);
      // get order data according to order
      const resultSellProducts = await getSellProducts();
      const sellProductsData = resultSellProducts.data.filter(
        (sellProductItem) => sellProductItem.order_id == id
      );
      console.log(sellProductsData);
      setSellProducts(sellProductsData);

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
        // console.log(sellProductItem.product.price);
        // console.log(totalPriceOfProducts);
        // console.log(totalAmountOfProducts);
      });

      // console.log(
      //   "numOfProducts " +
      //     numOfProducts +
      //     " totalPriceOfProducts " +
      //     totalPriceOfProducts +
      //     " totalAmountOfProducts " +
      //     totalAmountOfProducts
      // );

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
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handlePaymentProcess = async (e) => {
    e.preventDefault();
    const total_amount = bill.total_amount;
    const newOrder = {
      ...order,
      total_product_amount: total_amount,
    };

    const response = await editOrderDetails(id, newOrder);

    const newPayment = {
      order_id: id,
      total_amounts: total_amount,
    };

    // add total payment table
    const responsePayment = await addPayment(id, newPayment);
    // Product Process
    window.location = "/dashboard/purchaseOrders";
  };

  const handlePaymentShippingProcess = async (e) => {
    e.preventDefault();
    const total_amount = bill.total_amount;
    const newOrder = {
      ...order,
      total_product_amount: total_amount,
    };

    const response = await editOrderDetails(id, newOrder);

    // Product shpping Process
    window.location = `/dashboard/product/sell/shipping/${id}`;
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Sell Page - Amount
        </h1>
        {/* <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/product/sell/product"
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
        </div> */}
      </div>
      <form className={ProductViewFormStyle.formStyle}>
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
                    No. Product
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
                    Price
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
                    Discount(s)
                  </label>
                  <input
                    type="text"
                    value={bill.total_discounts + "%"}
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

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.descButtonAddStyle +
                " " +
                ProductViewFormStyle.descButtonAddStyleColor +
                " " +
                ProductViewFormStyle.addRightMargin
              }
            >
              Cancel
            </button>
            <button
              className={
                ProductViewFormStyle.descButtonAddStyle +
                " " +
                ProductViewFormStyle.addRightMargin
              }
              onClick={(e) => handlePaymentProcess(e)}
            >
              Finish Pay
            </button>
            <button
              className={ProductViewFormStyle.descButtonAddStyle}
              onClick={(e) => handlePaymentShippingProcess(e)}
            >
              Add Shipping
            </button>
          </div>
        </div>
      </form>
      {/* Customer Details */}

      {/* {Array.isArray(invoice.customer) === true && ( */}
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
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Number
                </label>
                <input
                  type="text"
                  value={order.customer.contact_number}
                  placeholder="Customer Number"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Payment
                </label>
                <input
                  type="text"
                  value={order.payment_method}
                  placeholder="Payment Method"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {Array.isArray(sellProducts) === true && (
        <React.Fragment>
          {sellProducts.map((sellProduct, index) => (
            <div key={index + 1} className={ProductViewFormStyle.details}>
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
                        Product
                      </label>
                      <input
                        type="text"
                        value={sellProduct.product.name}
                        placeholder="Product Name"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Quantity
                      </label>
                      <input
                        type="text"
                        value={sellProduct.quantity}
                        placeholder="Product Qunatity"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Price
                      </label>
                      <input
                        type="text"
                        value={"Rs." + sellProduct.price}
                        placeholder="Product Price"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Discount
                      </label>
                      <input
                        type="text"
                        value={
                          Math.round(
                            (((parseInt(sellProduct.product.price) *
                              sellProduct.quantity -
                              parseInt(sellProduct.price)) /
                              parseInt(sellProduct.product.price)) *
                              100) /
                              sellProduct.quantity
                          ) + "%"
                        }
                        placeholder="Product Discount"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      )}

      {/* <div className={ProductViewFormStyle.details}>
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
                  Product
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Name"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Price"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Quantity
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Qunatity"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Discount
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Discount"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    */}
    </React.Fragment>
  );
}

export default ProductSellAmountForm;
