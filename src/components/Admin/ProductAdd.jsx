import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
// import ProductViewForm from "./product/ProductViewForm";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import ProductViewFormStyle from "../../css/dashboard/product/ProductViewForm.module.css";
import ProductImage from "../../assets/dashboard/product/addPhoto.png";

function ProductAdd() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [status, setStatus] = useState("edit");

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
    setStatus("profile");
  };

  const onSubmit = () => {
    console.log("hello");
    setStatus("edit");
  };

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
              {/* Product Add Form Part */}
              <div>
                <h1 className={ProductViewFormStyle.titleStyle}>Product Add</h1>
              </div>
              <form action="#">
                <div className={ProductViewFormStyle.details}>
                  <div className={ProductViewFormStyle.imgDescPart}>
                    <div className={ProductViewFormStyle.Img}>
                      <input
                        type="file"
                        className={ProductViewFormStyle.productImageAddStyle}
                        onChange={onChangePicture}
                      />
                      <img
                        src={imgData !== null ? imgData : ProductImage}
                        alt="upload-img"
                        // onClick={(e) => onSubmit(e)}
                        className={
                          ProductViewFormStyle.productImagePreviewStyle
                        }
                      />
                    </div>

                    <div className={ProductViewFormStyle.desc}>
                      <div className={ProductViewFormStyle.descTitle}>
                        <div className={ProductViewFormStyle.dataProductTitle}>
                          <label
                            className={ProductViewFormStyle.labelProductTitle}
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            value="Product Name"
                            className={ProductViewFormStyle.inputProductTitle}
                          />
                        </div>
                      </div>
                      <div className={ProductViewFormStyle.descDetails}>
                        <div className={ProductViewFormStyle.dataTitle}>
                          <label
                            className={ProductViewFormStyle.labelStyleTitle}
                          >
                            Description
                          </label>
                          <textarea
                            value="Enter Value Here"
                            className={ProductViewFormStyle.inputStyleDesc}
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
                            Type
                          </label>
                          <input
                            type="text"
                            value="Dining Suite"
                            className={ProductViewFormStyle.inputStyle}
                            readOnly
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Colour
                          </label>
                          <input
                            type="text"
                            value="Brown"
                            className={ProductViewFormStyle.inputStyle}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className={ProductViewFormStyle.formLine}>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Width
                          </label>
                          <input
                            type="text"
                            value="172cm"
                            className={ProductViewFormStyle.inputStyle}
                            readOnly
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Height
                          </label>
                          <input
                            type="text"
                            value="185cm"
                            className={ProductViewFormStyle.inputStyle}
                            readOnly
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
                            value="Rs.50 000"
                            className={ProductViewFormStyle.inputStyle}
                            readOnly
                          />
                        </div>
                        <div className={ProductViewFormStyle.data}>
                          <label className={ProductViewFormStyle.labelStyle}>
                            Discount
                          </label>
                          <input
                            type="text"
                            value="10%"
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
                    <button className={ProductViewFormStyle.descButtonAddStyle}>
                      Add Product
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

export default ProductAdd;
