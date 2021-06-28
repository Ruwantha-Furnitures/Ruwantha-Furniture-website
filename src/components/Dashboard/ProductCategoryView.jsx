import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function ProductCategoryView() {
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
              {/* Product Category View Form Part */}
              <React.Fragment>
                <div>
                  <h1 className={ProductViewFormStyle.titleStyle}>
                    Product Category View
                  </h1>
                </div>
                <form action="#">
                  <div className={ProductViewFormStyle.details}>
                    <div className={ProductViewFormStyle.imgDescPart}>
                      <div className={ProductViewFormStyle.typeForm}>
                        <div className={ProductViewFormStyle.descTitle}>
                          <div
                            className={ProductViewFormStyle.dataProductTitle}
                          >
                            <label
                              className={ProductViewFormStyle.labelProductTitle}
                            >
                              Category
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="Category 1"
                              className={ProductViewFormStyle.inputProductTitle}
                            />
                          </div>
                          <div
                            className={ProductViewFormStyle.descButtonsAddType}
                          >
                            <div className={ProductViewFormStyle.descButtonAdd}>
                              <button
                                className={
                                  ProductViewFormStyle.descButtonAddStyle +
                                  " " +
                                  ProductViewFormStyle.addRightMargin
                                }
                              >
                                Update
                              </button>
                              <button
                                className={
                                  ProductViewFormStyle.descButtonAddStyle
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={ProductViewFormStyle.typesList}>
                        {/* Product type List View */}
                        <React.Fragment>
                          <h1 className={ProductViewFormStyle.productTypeTitle}>
                            Categories
                          </h1>
                          <div className={ProductViewFormStyle.productType}>
                            <span
                              class={
                                "material-icons " +
                                ProductViewFormStyle.iconSize
                              }
                            >
                              circle
                            </span>
                            <h1
                              className={ProductViewFormStyle.productTypeName}
                            >
                              Category 01
                            </h1>
                          </div>
                          <div className={ProductViewFormStyle.productType}>
                            <span
                              class={
                                "material-icons " +
                                ProductViewFormStyle.iconSize
                              }
                            >
                              circle
                            </span>
                            <h1
                              className={ProductViewFormStyle.productTypeName}
                            >
                              Category 02
                            </h1>
                          </div>
                          <div className={ProductViewFormStyle.productType}>
                            <span
                              class={
                                "material-icons " +
                                ProductViewFormStyle.iconSize
                              }
                            >
                              circle
                            </span>
                            <h1
                              className={ProductViewFormStyle.productTypeName}
                            >
                              Category 03
                            </h1>
                          </div>
                          <div className={ProductViewFormStyle.productType}>
                            <span
                              class={
                                "material-icons " +
                                ProductViewFormStyle.iconSize
                              }
                            >
                              circle
                            </span>
                            <h1
                              className={ProductViewFormStyle.productTypeName}
                            >
                              Category 04
                            </h1>
                          </div>
                        </React.Fragment>
                      </div>
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

export default ProductCategoryView;
