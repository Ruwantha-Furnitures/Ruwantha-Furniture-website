import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";
import { getProducts } from "./../../../service/product";

function ProductSellProductForm() {
  // get customer id from params

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
    customer_id: 0,
    discount: 0,
    totalPrice: 0,
  });

  // const [orders, setOrders] =
  // create variable object array and add

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await getProducts();
      setProducts(result.data);
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

  const handleSellProduct = (e) => {
    e.preventDefault();
    window.location = "/dashboard/product/sell/amount";
  };
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
        action="#"
        className={ProductViewFormStyle.formStyle}
        onSubmit={(e) => handleSellProduct(e)}
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
                    <option value="">Select Product</option>
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
            >
              Add Product
            </button>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Sell Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellProductForm;
