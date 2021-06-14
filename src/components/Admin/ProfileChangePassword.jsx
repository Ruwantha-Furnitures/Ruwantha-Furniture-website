import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductSellForm from "./product/ProductSellForm";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function ProfileChangePassword() {
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
                    Profile Change Password
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
                              Username
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="User Email"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                        </div>
                        <div className={ProductViewFormStyle.formLine}>
                          <div className={ProductViewFormStyle.data}>
                            <label className={ProductViewFormStyle.labelStyle}>
                              Current
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Current Password"
                              className={ProductViewFormStyle.inputStyle}
                            />
                          </div>
                          <div className={ProductViewFormStyle.data}>
                            <label className={ProductViewFormStyle.labelStyle}>
                              New
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="New Password"
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
                        Change Password
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

export default ProfileChangePassword;
