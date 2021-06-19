import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";

function ProductTypeAdd() {
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
              {/* Product Type Form Part */}
              <React.Fragment>
                <div>
                  <h1 className={ProductViewFormStyle.titleStyle}>
                    Product Type Add
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
                            <select
                              className={ProductViewFormStyle.inputProductTitle}
                            >
                              <option value="">Select Category</option>
                              <option value="category1">Category 1</option>
                              <option value="category2">Category 2</option>
                              <option value="category3">Category 3</option>
                              <option value="category4">Category 4</option>
                            </select>
                          </div>
                          <div
                            className={ProductViewFormStyle.dataProductTitle}
                          >
                            <label
                              className={ProductViewFormStyle.labelProductTitle}
                            >
                              New Type
                            </label>
                            <input
                              type="text"
                              value=""
                              placeholder="New Product Type"
                              className={ProductViewFormStyle.inputProductTitle}
                            />
                          </div>
                          <div
                            className={ProductViewFormStyle.descButtonsAddType}
                          >
                            <div className={ProductViewFormStyle.descButtonAdd}>
                              <button
                                className={
                                  ProductViewFormStyle.descButtonAddStyle
                                }
                              >
                                Add Type
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={ProductViewFormStyle.typesList}>
                        <h1 className={ProductViewFormStyle.productTypeTitle}>
                          Category 01
                        </h1>
                        <div className={ProductViewFormStyle.productType}>
                          <span
                            class={
                              "material-icons " + ProductViewFormStyle.iconSize
                            }
                          >
                            circle
                          </span>
                          <h1 className={ProductViewFormStyle.productTypeName}>
                            Type 01
                          </h1>
                        </div>
                        <div className={ProductViewFormStyle.productType}>
                          <span
                            class={
                              "material-icons " + ProductViewFormStyle.iconSize
                            }
                          >
                            circle
                          </span>
                          <h1 className={ProductViewFormStyle.productTypeName}>
                            Type 02
                          </h1>
                        </div>
                        <div className={ProductViewFormStyle.productType}>
                          <span
                            class={
                              "material-icons " + ProductViewFormStyle.iconSize
                            }
                          >
                            circle
                          </span>
                          <h1 className={ProductViewFormStyle.productTypeName}>
                            Type 02
                          </h1>
                        </div>
                        <div className={ProductViewFormStyle.productType}>
                          <span
                            class={
                              "material-icons " + ProductViewFormStyle.iconSize
                            }
                          >
                            circle
                          </span>
                          <h1 className={ProductViewFormStyle.productTypeName}>
                            Type 02
                          </h1>
                        </div>
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

export default ProductTypeAdd;
