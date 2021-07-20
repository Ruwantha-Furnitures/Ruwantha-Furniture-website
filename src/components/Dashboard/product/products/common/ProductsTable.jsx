import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../../css/dashboard/Table.module.css";
import Auth from "../../../service/auth";

const products = [
  {
    id: "1",
    productName: "Table",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "2",
    productName: "Chair",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "3",
    productName: "Cupboard",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "4",
    productName: "Desk",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "5",
    productName: "Desk(High)",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "6",
    productName: "Cabinet",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "7",
    productName: "Cabient(High)",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
  {
    id: "8",
    productName: "Gaming Chair",
    type: "Product Type 1",
    category: "Category 1",
    price: "Rs.25000",
    quantity: "No.12",
  },
];

function ProductsTable() {
  const user = Auth.getCurrentUser();

  // const [products, setProducts] = useState({});
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setProducts(products);
  // }, []);

  const onInputChange = (e) => {
    let search = e.target.value;
    // setProducts(products.filter((product) => product.productName === search));
    setSearch(search);
  };

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Products</h1>
        <div className={TableStyle.searchSection}>
          <form action="#">
            <div className={TableStyle.search}>
              <div className={TableStyle.searchicon}>
                <span
                  className={"material-icons " + TableStyle.searchIconStyle}
                >
                  search
                </span>
              </div>
              <div className={TableStyle.searchText}>
                <input
                  type="search"
                  placeholder="Search product here"
                  value={search}
                  name="search"
                  onChange={(e) => onInputChange(e)}
                  className={TableStyle.searchinput}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <div className={TableStyle.header}>
                  Product
                  {user === "Admin" && (
                    <Link
                      to="/dashboard/product/add"
                      className={TableStyle.linkStyleAddHeader}
                    >
                      <span
                        className={"material-icons " + TableStyle.addIconStyle}
                      >
                        add_circle
                      </span>
                    </Link>
                  )}
                </div>
              </th>
              <th>
                <div className={TableStyle.header}>
                  <Link to="" className={TableStyle.linkStyleAddHeader}>
                    Type
                  </Link>
                  {user === "Admin" && (
                    <Link
                      to="/dashboard/product/addProductType"
                      className={TableStyle.linkStyleAddHeader}
                    >
                      <span
                        className={"material-icons " + TableStyle.addIconStyle}
                      >
                        add_circle
                      </span>
                    </Link>
                  )}
                </div>
              </th>
              <th>
                <div className={TableStyle.header}>
                  <Link to="" className={TableStyle.linkStyleAddHeader}>
                    Category
                  </Link>
                  {user === "Admin" && (
                    <Link
                      to="/dashboard/product/addProductCategory"
                      className={TableStyle.linkStyleAddHeader}
                    >
                      <span
                        className={"material-icons " + TableStyle.addIconStyle}
                      >
                        add_circle
                      </span>
                    </Link>
                  )}
                </div>
              </th>

              <th>
                <div className={TableStyle.header}>Price</div>
              </th>
              <th>
                <div className={TableStyle.header}>Qunatity</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index + 1}>
                <td>
                  <Link
                    to="/dashboard/product/view"
                    className={TableStyle.linkStyleAdd}
                  >
                    {product.productName}
                  </Link>
                </td>
                <td>
                  <Link
                    to="/dashboard/product/viewProductType"
                    className={TableStyle.linkStyleAdd}
                  >
                    {product.type}
                  </Link>
                </td>
                <td>
                  <Link
                    to="/dashboard/product/viewProductCategory"
                    className={TableStyle.linkStyleAdd}
                  >
                    {product.category}
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
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
