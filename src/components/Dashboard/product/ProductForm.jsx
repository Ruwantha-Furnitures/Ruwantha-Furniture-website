import React, { useState } from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";
import ProductImage from "../../../assets/dashboard/product/addPhotoNew2.png";

function ProductForm() {
  // const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      // setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <React.Fragment>
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
                className={ProductViewFormStyle.productImagePreviewStyle}
              />
            </div>

            <div className={ProductViewFormStyle.desc}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Name"
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.descDetails}>
                <div className={ProductViewFormStyle.dataTitle}>
                  <label className={ProductViewFormStyle.labelStyleTitle}>
                    Description
                  </label>
                  <textarea
                    value=""
                    placeholder="Product Description..."
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
                    value=""
                    placeholder="Product Type"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Colour
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
                    Width
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
                    Height
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
                    Price
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
        </div>
        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Add Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductForm;
