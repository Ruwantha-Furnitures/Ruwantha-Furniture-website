import React from "react";
// import "../css/AllProductsView.css";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";
import TableStyle from "../../../css/dashboard/Table.module.css";
import { Link } from "react-router-dom";

function AllProductsView() {
  return (
    <React.Fragment>
      <div className={AllProductViewStyle.allProductsSection}>
        <div className={AllProductViewStyle.allProductsLabel}>
          <h1 className={AllProductViewStyle.allProductsLabelStyle}>
            All Categories
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
                Table
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
                Chair
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
                Cupboard
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
                Desk
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
                Desk(High)
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
                Cabinet
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
                Gaming Chair
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProductsView;
