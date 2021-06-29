import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function AssignDriver() {
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
              <React.Fragment>
                <div>
                  <h1 className={ProductViewFormStyle.titleStyle}>
                    Assign Driver Page
                  </h1>
                </div>
                <form action="#" className={ProductViewFormStyle.formStyle}>
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
                              placeholder="Product Name"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                          <div className={ProductViewFormStyle.data}>
                            <label className={ProductViewFormStyle.labelStyle}>
                              Price
                            </label>
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
                              value=""
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
                              value=""
                              placeholder="Customer Last Name"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                        </div>
                        <div className={ProductViewFormStyle.formLine}>
                          <div className={ProductViewFormStyle.dataforLong}>
                            <label
                              className={ProductViewFormStyle.labelStyleforLong}
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Customer Email Address"
                              className={ProductViewFormStyle.inputStyleforLong}
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
                              type="text"
                              value=""
                              placeholder="Customer Number"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                          <div className={ProductViewFormStyle.data}>
                            <label className={ProductViewFormStyle.labelStyle}>
                              Delivery
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Payment Method"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={ProductViewFormStyle.descButtonsAdd}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                      >
                        Sell Product
                      </button>
                    </div>
                  </div>
                </form>
              </React.Fragment>
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

export default AssignDriver;
