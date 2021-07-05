import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function ProductsTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.tabletitle}>
        <h1 className={TableStyle.tableTitleProductStyle}>Products</h1>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <div className={TableStyle.header}>
                  Product
                  <Link
                    to="/dashboard/product/add"
                    className={TableStyle.linkStyle}
                  >
                    <span
                      className={
                        "material-icons" + " " + TableStyle.addIconStyle
                      }
                    >
                      add_circle
                    </span>
                  </Link>
                </div>
              </th>
              <th>
                <div className={TableStyle.header}>
                  Type
                  <Link
                    to="/dashboard/product/addType"
                    className={TableStyle.linkStyle}
                  >
                    <span
                      className={
                        "material-icons" + " " + TableStyle.addIconStyle
                      }
                    >
                      add_circle
                    </span>
                  </Link>
                </div>
              </th>
              <th>
                <div className={TableStyle.header}>
                  Category
                  <Link
                    to="/dashboard/product/addProductCategory"
                    className={TableStyle.linkStyle}
                  >
                    <span
                      className={
                        "material-icons" + " " + TableStyle.addIconStyle
                      }
                    >
                      add_circle
                    </span>
                  </Link>
                </div>
              </th>

              <th>Price</th>
              <th>Qunatity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Category 1</td>
              <td>Rs.25000</td>
              <td>No.12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={TableStyle.tablePagination}>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_back_ios
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span
            className={
              "material-icons " +
              TableStyle.paginationCircleIcon +
              " " +
              TableStyle.active
            }
          >
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ProductsTable;
