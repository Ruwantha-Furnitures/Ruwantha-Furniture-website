import React from "react";
import ProductImage from "../../../assets/items/14.jpg";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";

function ProductViewForm() {
  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>Product View</h1>
      </div>
      <div className={ProductViewFormStyle.details}>
        <div className={ProductViewFormStyle.imgDescPart}>
          <div className={ProductViewFormStyle.Img}>
            <img
              src={ProductImage}
              alt=""
              className={ProductViewFormStyle.productImageStyle}
            />
          </div>
          <div className={ProductViewFormStyle.desc}>
            <div className={ProductViewFormStyle.descTitle}>
              <h2 className={ProductViewFormStyle.descTitleStyle}>
                Canton Dining Suite
              </h2>
            </div>
            <div className={ProductViewFormStyle.descDetails}>
              <p className={ProductViewFormStyle.descDetailsStyle}>
                Enjoy a fine dining experience with the 5 piece Canton dining
                suite. Distinctive table design with tempered glass overlay will
                lead to a clean finish. The appealing chair pattern with
                spacious seating capacity will enrich aesthetics combined with
                comfort
              </p>
            </div>
            <div className={ProductViewFormStyle.descButtons}>
              <div
                className={
                  ProductViewFormStyle.descButton +
                  " " +
                  ProductViewFormStyle.sidemargin
                }
              >
                <button className={ProductViewFormStyle.descButtonStyle}>
                  Update
                </button>
              </div>
              <div className={ProductViewFormStyle.descButton}>
                <button className={ProductViewFormStyle.descButtonStyle}>
                  Delete
                </button>
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
                <label className={ProductViewFormStyle.labelStyle}>Type</label>
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
                <label className={ProductViewFormStyle.labelStyle}>Width</label>
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
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
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
    </React.Fragment>
  );
}

export default ProductViewForm;
