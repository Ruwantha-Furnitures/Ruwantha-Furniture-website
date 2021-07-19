import React from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductImage from "../../../../../assets/items/14.jpg";
import { Link } from "react-router-dom";

import Auth from "../../../service/auth";

function ProductViewForm() {
  const user = Auth.getCurrentUser();
  const handleUpdate = () => {
    window.location = "/dashboard/product/update";
  };

  return (
    <>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Views
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/products"
              className={ProductViewFormStyle.linkStyle}
            >
              <div className={ProductViewFormStyle.backStyle}>
                <span
                  className={
                    "material-icons " + ProductViewFormStyle.backIconStyle
                  }
                >
                  arrow_back_ios
                </span>
                <div className={ProductViewFormStyle.backButtonStyle}>Back</div>
              </div>
            </Link>
          </div>
        </div>
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
              {user === "Admin" && (
                <>
                  <div
                    className={
                      ProductViewFormStyle.descButton +
                      " " +
                      ProductViewFormStyle.sidemargin
                    }
                  >
                    <button
                      className={
                        ProductViewFormStyle.descButtonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor
                      }
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                  <div className={ProductViewFormStyle.descButton}>
                    <button
                      className={
                        ProductViewFormStyle.descButtonStyle +
                        " " +
                        ProductViewFormStyle.deleteButtonColor
                      }
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
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
    </>
  );
}

export default ProductViewForm;
