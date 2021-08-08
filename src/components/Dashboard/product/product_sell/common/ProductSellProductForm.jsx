import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "./../../../service/product";
import { addOrder, getOrders } from "../../../service/order";
import { getOrderDetails } from "./../../../service/order";

function ProductSellProductForm() {
  // get customer id from params
  const { id } = useParams();

  console.log(id);

  const [products, setProducts] = useState({
    id: 0,
    name: "",
    price: 0,
    discount: 0,
  });

  const [order, setOrder] = useState({
    product_id: 0,
    price: 0,
    quantity: 1,
    invoice_id: id,
    discount: 0,
  });

  const [numOfForms, setNumOfForms] = useState(0);
  const [totalOrders, setTotalOrders] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  // const [orders, setOrders] =
  // create variable object array and add

  useEffect(() => {
    loadOrders();
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await getProducts();
      var productItems = result.data;
      // console.log(totalOrders);
      totalOrders.forEach((orderItem) => {
        productItems = productItems.filter(
          (item) => item.id !== orderItem.product_id
        );
      });
      // console.log(productItems);
      setProducts(productItems);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const loadOrders = async () => {
    try {
      const result = await getOrders();
      console.log(result.data);

      setTotalOrders(
        result.data.filter((orderItem) => orderItem.invoice_id == id)
      );
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    // setOrder({ ...order, [e.target.name]: e.target.value });
    if (e.target.name === "product_id") {
      const product_id = e.target.value;
      const filterProduct = products.filter(
        (product) => product.id == product_id
      )[0];

      const discount = filterProduct.discount;
      const price = (filterProduct.price * (100 - discount)) / 100;

      setOrder({
        ...order,
        [e.target.name]: e.target.value,
        discount: discount,
        price: price * order.quantity,
        productPrice: price,
      });

      console.log(filterProduct);
    } else if (e.target.name === "quantity") {
      const quantity = e.target.value;
      const priceTotal = order.productPrice * quantity;
      setOrder({
        ...order,
        [e.target.name]: e.target.value,
        price: priceTotal,
      });
    }
  };

  // const handleSellProduct = (e) => {
  //   e.preventDefault();
  //   window.location = "/dashboard/product/sell/amount";
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(order);
  //   try {
  //     // const response = await addOrder(order);
  //     // const newOrder = response.data;
  //     // console.log(response.data);
  //   } catch (error) {
  //     if (error.response.status === 500) {
  //       console.log("There was a problem with the server: ", error);
  //     } else {
  //       console.log(error.response.data.msg);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addOrder(order);
      var product_id = response.data.id;

      const result = await getOrderDetails(product_id);
      console.log(result.data);
      setProducts(
        products.filter((product) => product.id !== result.data.product.id)
      );
      setTotalOrders([...totalOrders, result.data]);
      const resetOrder = {
        product_id: 0,
        price: 0,
        quantity: 1,
        customer_id: id,
        discount: 0,
      };
      setOrder(resetOrder);
      // console.log(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  const handleFinalProcess = (e) => {
    e.preventDefault();
    console.log("handleContinueProcess");
    // send paramter value as customer id and date
  };

  const handleCancelOrder = (e, id) => {
    e.preventDefault();
    console.log(id);
    // cancel order process
  };

  // console.log(totalOrders);

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Sell Page - Product
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/product/sell/customer"
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
        // onSubmit={(e) => onSubmit(e)}
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
                    Product
                  </label>
                  <select
                    className={ProductViewFormStyle.inputFormSelectStyle}
                    name="product_id"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="0">Select Product</option>
                    {Array.isArray(products) === true && (
                      <React.Fragment>
                        {products.map((product, index) => (
                          <option key={index} value={product.id}>
                            {product.name}
                          </option>
                        ))}
                      </React.Fragment>
                    )}
                  </select>
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={order.quantity}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Qunatity"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Discount
                  </label>
                  <input
                    type="text"
                    // name="price"
                    value={order.discount + "%"}
                    // onChange={(e) => onInputChange(e)}
                    placeholder="Product Price"
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
                    name="price"
                    value={"Rs." + order.price}
                    // onChange={(e) => onInputChange(e)}
                    placeholder="Product Price"
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
              onClick={(e) => handleSubmit(e)}
            >
              Sell Product
            </button>
            {totalOrders.length > 0 && (
              <button
                className={ProductViewFormStyle.descButtonAddStyle}
                onClick={(e) => handleFinalProcess(e)}
              >
                Finish Sell
              </button>
            )}
          </div>
        </div>
      </form>

      {Array.isArray(totalOrders) === true && (
        <React.Fragment>
          {totalOrders.map((order, index) => (
            <form key={index + 1} className={ProductViewFormStyle.formStyle}>
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
                          Product
                        </label>
                        <input
                          type="text"
                          value={order.product.name}
                          readOnly
                          placeholder="Product Qunatity"
                          className={ProductViewFormStyle.inputStyle}
                        />
                      </div>
                      <div className={ProductViewFormStyle.data}>
                        <label className={ProductViewFormStyle.labelStyle}>
                          Quantity
                        </label>
                        <input
                          type="number"
                          value={order.quantity}
                          readOnly
                          placeholder="Product Qunatity"
                          className={ProductViewFormStyle.inputStyle}
                        />
                      </div>
                    </div>
                    <div className={ProductViewFormStyle.formLine}>
                      <div className={ProductViewFormStyle.data}>
                        <label className={ProductViewFormStyle.labelStyle}>
                          Discount
                        </label>
                        <input
                          type="text"
                          value={order.discount + "%"}
                          placeholder="Product Price"
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
                          name="price"
                          value={"Rs." + order.price}
                          placeholder="Product Price"
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
                    onClick={(e) => handleCancelOrder(e, order.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ProductSellProductForm;
