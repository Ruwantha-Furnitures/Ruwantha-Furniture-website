import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function DeliveryDriverProfile() {
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
              {/* Delivery Driver View Profile */}
              <React.Fragment>
                <div>
                  <h1 className={ProductViewFormStyle.titleStyle}>
                    Delivery Driver Profile
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
                              First Name
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Driver First Name"
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
                              placeholder="Driver Last Name"
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
                              placeholder="Delivery Driver Email"
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
                              placeholder="Delivery Driver Address"
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
                              placeholder="Driver Contact Number"
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
                              placeholder="Basic Payment"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                        </div>

                        <div className={ProductViewFormStyle.formLine}>
                          <div className={ProductViewFormStyle.data}>
                            <label className={ProductViewFormStyle.labelStyle}>
                              Vehicle
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Vehicle Number"
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
                              placeholder="Vehicle Type"
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
                        Add New
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

export default DeliveryDriverProfile;
