import React from "react";
// import "../css/AllProductsView.css";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";

function AllProductsView() {
  return (
    <React.Fragment>
      <div className={AllProductViewStyle.allProductsSection}>
        <div className={AllProductViewStyle.allProductsLabel}>
          <h1 className={AllProductViewStyle.allProductsLabelStyle}>
            Delivery Dates
          </h1>
        </div>
        <div className={AllProductViewStyle.allProductsTable}>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-07-10
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-06-17
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-06-10
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-05-27
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-04-17
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-04-10
              </h1>
            </div>
          </div>
          <div className={AllProductViewStyle.allProductsTableRow}>
            <div className={AllProductViewStyle.allProductsRowPointer}>
              <span
                className={
                  "material-icons " + AllProductViewStyle.allProductPointerSize
                }
              >
                circle
              </span>
            </div>
            <div className={AllProductViewStyle.allProductsRowText}>
              <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                2021-03-17
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProductsView;
