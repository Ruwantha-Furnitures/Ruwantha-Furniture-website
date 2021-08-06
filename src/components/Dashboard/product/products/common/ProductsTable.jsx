import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../../css/dashboard/Table.module.css";
import Auth from "../../../service/auth";
import { getProducts } from "./../../../service/product";

function ProductsTable() {
  const user = Auth.getCurrentUser();

  const [products, setProducts] = useState({
    name: "",
    type_id: 0,
    type: {},
    price: "",
    description: "",
    color: "",
    width: "",
    height: "",
    discount: "",
    img_location: "",
  });

  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState({});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await getProducts();
      setProducts(result.data);
      setFilterProducts(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  console.log(products);

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
                    Colour
                  </Link>
                </div>
              </th>

              <th>
                <div className={TableStyle.header}>Price</div>
              </th>
              <th>
                <div className={TableStyle.header}>Discount</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterProducts) === true && (
              <React.Fragment>
                {filterProducts.map((product, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to="/dashboard/product/view"
                        className={TableStyle.linkStyleAdd}
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/dashboard/product/viewProductType"
                        className={TableStyle.linkStyleAdd}
                      >
                        {product.type.name}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/dashboard/product/viewProductCategory"
                        className={TableStyle.linkStyleAdd}
                      >
                        {product.color}
                      </Link>
                    </td>
                    <td>Rs.{product.price}</td>
                    <td>{product.discount}%</td>
                  </tr>
                ))}
              </React.Fragment>
            )}
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
