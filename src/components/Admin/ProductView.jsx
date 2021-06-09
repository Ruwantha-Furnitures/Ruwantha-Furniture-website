import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import "../../css/dashboard/ProductView.css";
import ProductImage from "../../assets/items/14.jpg";

function ProductView() {
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
              {/* Product View Part */}
              <div>
                <h1 className="productViewTitleStyle">Product View</h1>
              </div>
              <div className="productViewDetails">
                <div className="productViewImgDescPart">
                  <div className="productViewImg">
                    <img
                      src={ProductImage}
                      alt=""
                      className="ProductImageStyle"
                    />
                  </div>
                  <div className="productViewDesc">
                    <div className="productViewDescTitle">
                      <h2 className="productViewDescTitleStyle">
                        Canton Dining Suite
                      </h2>
                    </div>
                    <div className="productViewDescDetails">
                      <p className="productViewDescDetailsStyle">
                        Enjoy a fine dining experience with the 5 piece Canton
                        dining suite. Distinctive table design with tempered
                        glass overlay will lead to a clean finish. The appealing
                        chair pattern with spacious seating capacity will enrich
                        aesthetics combined with comfort
                      </p>
                    </div>
                    <div className="productViewDescButtons">
                      <div className="productViewDescButton sidemargin">
                        <button className="productViewDescButtonStyle">
                          Update
                        </button>
                      </div>
                      <div className="productViewDescButton">
                        <button className="productViewDescButtonStyle">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prductViewInfoPart">
                  <div className="productViewForm">
                    <div className="productViewFormLine setMarginTop">
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="productViewFormLine">
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="productViewFormLine">
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                      <div className="productViewData">
                        <label className="productViewLabelStyle">Type</label>
                        <input
                          type="text"
                          value="Dining Suite"
                          className="productViewInputStyle"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default ProductView;
