import React from "react";
import { Link } from "react-router-dom";
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
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Jaffna
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.200
            </span>
          </div>

          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Nuwara Eliya
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Galle
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Ampara
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Anuradhapura
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Kandy
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Colombo
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Trincomalee
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
          <div className={AllProductViewStyle.tooltip}>
            <div className={AllProductViewStyle.allProductsTableRow}>
              <div className={AllProductViewStyle.allProductsRowPointer}>
                <span
                  className={
                    "material-icons " +
                    AllProductViewStyle.allProductPointerSize
                  }
                >
                  circle
                </span>
              </div>
              <div className={AllProductViewStyle.allProductsRowText}>
                <h1 className={AllProductViewStyle.allProductsRowTextStyle}>
                  Matara
                </h1>
              </div>
            </div>
            <span className={AllProductViewStyle.tooltiptext}>
              Charge is Rs.400
            </span>
          </div>
        </div>
        {/* Pagination */}
        <div className={AllProductViewStyle.tablePagination}>
          <Link to="#" className={AllProductViewStyle.paginationLink}>
            <span
              className={
                "material-icons " + AllProductViewStyle.paginationArrowIcon
              }
            >
              arrow_back_ios
            </span>
          </Link>
          <Link to="#" className={AllProductViewStyle.paginationLink}>
            <span
              className={
                "material-icons " +
                AllProductViewStyle.paginationCircleIcon +
                " " +
                AllProductViewStyle.active
                // : "material-icons " + TableStyle.paginationCircleIcon
              }
            >
              circle
            </span>
          </Link>
          <Link to="#" className={AllProductViewStyle.paginationLink}>
            <span
              className={
                "material-icons " + AllProductViewStyle.paginationCircleIcon
                // +
                //   " " +
                //   AllProductViewStyle.active
                // : "material-icons " + TableStyle.paginationCircleIcon
              }
            >
              circle
            </span>
          </Link>
          <Link to="#" className={AllProductViewStyle.paginationLink}>
            <span
              className={
                "material-icons " + AllProductViewStyle.paginationArrowIcon
              }
            >
              arrow_forward_ios
            </span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProductsView;
