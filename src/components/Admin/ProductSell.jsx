import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";

import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function ProductSell() {
  return (
    <div className={MainStyle.bodycontainer}>
      <div className={MainStyle.navSection}>
        <Navbar />
      </div>
      {/* Body */}
      <div className={MainStyle.bodySection}>
        {/* Sidebar */}
        <div className={MainStyle.sidebarSection}>
          <Sidebar />
        </div>
        <div className={ProductStyle.cardDataSection}>
          <div className={ProductStyle.detailsSection}>
            <div className={ProductStyle.detailCard}>
              {/* Product Sell Form Part */}
              <div>
                <h1 className={ProductViewFormStyle.titleStyle}>
                  Product Sell Page
                </h1>
              </div>
              <form action="#">
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
                            value=""
                            placeholder="Product Type"
                            className={ProductViewFormStyle.inputStyle}
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Type
                          </label>
                          <input
                            type="text"
                            value=""
                            placeholder="Product Colour"
                            className={ProductViewFormStyle.inputStyle}
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
                            value=""
                            placeholder="Product Width"
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
                            placeholder="Product Height"
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
                            placeholder="Product Price"
                            className={ProductViewFormStyle.inputStyle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

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
                            Customer
                          </label>
                          <input
                            type="text"
                            value=""
                            placeholder="Product Type"
                            className={ProductViewFormStyle.inputStyle}
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Email
                          </label>
                          <input
                            type="text"
                            value=""
                            placeholder="Product Colour"
                            className={ProductViewFormStyle.inputStyle}
                          />
                        </div>
                      </div>
                      <div className={ProductViewFormStyle.formLine}>
                        <div className={ProductViewFormStyle.dataforLong}>
                          <label
                            className={ProductViewFormStyle.labelStyleforLong}
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            value=""
                            placeholder="Product Width"
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
                            type="text"
                            value=""
                            placeholder="Product Price"
                            className={ProductViewFormStyle.inputStyle}
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Payment
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

                <div className={ProductViewFormStyle.descButtonsAdd}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button className={ProductViewFormStyle.descButtonAddStyle}>
                      Sell Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={ProductStyle.productsViewSection}>
            <AllProductsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSell;
