import React from "react";
// import "../css/AllProductsView.css";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";

function AllProductsView() {
  return (
    <React.Fragment>
      <div className={AllProductViewStyle.allProductsSection}>
        <div className={AllProductViewStyle.allProductsLabel}>
          <h1 className={AllProductViewStyle.allProductsLabelStyle}>
            Charge for Area
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
                Jaffna Rs.400
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
                Nuwara Eliya Rs.400
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
                Anuradhapura Rs.400
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
                Col Rs.300
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
                Matara Rs.400
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
                Hambanthota Rs.400
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
