import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "./../../../service/product";
import {
  addSellProduct,
  getSellProducts,
  deleteSellProduct,
  getSellProductDetails,
} from "../../../service/sellProduct";
// import { getOrderDetails } from "./../../../service/order";

function ProductSellProductForm() {
  const { id } = useParams();

  const [products, setProducts] = useState({
    id: 0,
    name: "Select Product",
    price: 0,
    discount: 0,
  });

  const [sellProduct, setSellProduct] = useState({
    product_id: 0,
    price: 0,
    quantity: 1,
    order_id: id,
    discount: 0,
    productPrice: 0,
  });

  const [totalSellProducts, setTotalSellProducts] = useState([]);

  useEffect(() => {
    loadSellProductsAndProducts();
  }, []);

  const loadSellProductsAndProducts = async () => {
    try {
      const result = await getSellProducts();
      console.log(result.data);
      console.log(id);
      const resultSellProducts = result.data.filter(
        (sellProductItem) => sellProductItem.order_id == id
      );

      const resultProducts = await getProducts();
      var productItems = resultProducts.data;
      console.log(productItems);
      resultSellProducts.forEach((sellProductItem) => {
        productItems = productItems.filter(
          (item) => item.id !== sellProductItem.product_id
        );
      });
      // console.log(productItems);
      setProducts(productItems);
      setTotalSellProducts(resultSellProducts);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    if (e.target.name === "product_id" && e.target.value != 0) {
      const product_id = e.target.value;
      const filterProduct = products.filter(
        (product) => product.id == product_id
      )[0];

      console.log(product_id);

      const discount = filterProduct.discount;
      const price = (parseInt(filterProduct.price) * (100 - discount)) / 100;
      console.log(price);

      setSellProduct({
        ...sellProduct,
        [e.target.name]: e.target.value,
        discount: discount,
        price: price * sellProduct.quantity,
        productPrice: price,
      });

      // console.log(filterProduct);
    } else if (e.target.name === "quantity") {
      const quantity = e.target.value;
      const priceTotal = sellProduct.productPrice * quantity;
      setSellProduct({
        ...sellProduct,
        [e.target.name]: e.target.value,
        price: priceTotal,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(sellProduct);
    try {
      const newSellProduct = {
        product_id: sellProduct.product_id,
        price: sellProduct.price,
        quantity: sellProduct.quantity,
        order_id: sellProduct.order_id,
        discount: sellProduct.discount,
      };
      const response = await addSellProduct(newSellProduct);

      var product_id = response.data.id;

      const result = await getSellProductDetails(product_id);
      console.log(result.data);
      setProducts(
        products.filter((product) => product.id !== result.data.product.id)
      );
      setTotalSellProducts([...totalSellProducts, result.data]);
      const resetOrder = {
        product_id: 0,
        price: 0,
        quantity: 1,
        order_id: id,
        discount: 0,
        productPrice: 0,
      };
      setSellProduct(resetOrder);
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
    window.location = `/dashboard/product/sell/amount/${id}`;
    console.log("handleContinueProcess");
    // send paramter value as customer id and date
  };

  const handleCancelSellProduct = async (e, order_id) => {
    e.preventDefault();
    try {
      const response = await deleteSellProduct(order_id);
      window.location = `/dashboard/product/sell/product/${id}`;
    } catch (error) {
      console.log("Error", error.message);
    }
    console.log(id);
    // cancel order process
  };

  console.log(sellProduct);

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
                    value={sellProduct.product_id}
                  >
                    {/* {sellProduct.product_id === 0 ? (
                      <option value="0">Select Product</option>
                    ) : (
                      <option value="0">Select Product</option>
                    )} */}
                    <option value="0">Select Product</option>
                    {Array.isArray(products) === true && (
                      <React.Fragment>
                        {products.map((product, index) => (
                          <option key={index + 1} value={product.id}>
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
                    value={sellProduct.quantity}
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
                    value={sellProduct.discount + "%"}
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
                    value={"Rs." + sellProduct.price}
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
            {totalSellProducts.length > 0 && (
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

      {Array.isArray(totalSellProducts) === true && (
        <React.Fragment>
          {totalSellProducts.map((sellProductItem, index) => (
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
                          value={sellProductItem.product.name}
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
                          value={sellProductItem.quantity}
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
                          value={sellProductItem.discount + "%"}
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
                          value={"Rs." + sellProductItem.price}
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
                    onClick={(e) =>
                      handleCancelSellProduct(e, sellProductItem.id)
                    }
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
