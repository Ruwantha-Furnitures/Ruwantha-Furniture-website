import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../../css/dashboard/Table.module.css";
import Auth from "../../../service/auth";
import { getProducts } from "./../../../service/product";
import { getProductCategories } from "./../../../service/productCategory";
import Pagination from "./../../../common/pagination";
import { paginate } from "./../../../utils/paginate";

function ProductsTable() {
  const user = Auth.getCurrentUser();

  const [products, setProducts] = useState({
    name: "",
    type_id: 0,
    type: {
      name: "",
      category_id: 0,
      category: "",
    },
    price: "",
    description: "",
    color: "",
    width: "",
    height: "",
    discount: "",
    img_location: "",
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState({});

  useEffect(() => {
    loadProducts();
  }, [page]);

  const loadProducts = async () => {
    try {
      const result = await getProducts();
      const resultCategories = await getProductCategories();

      // console.log(resultCategories.data);
      const products = result.data;
      const categories = resultCategories.data;

      products.forEach((product) => {
        var category = categories.filter(
          (category) => category.id === product.type.category_id
        );
        product.type.category = category[0];
      });

      setProducts(products);
      const data = paginate(products, page.currentPage, page.pageSize);
      setFilterProducts(data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterProducts(paginate(products, page.currentPage, page.pageSize));
    } else {
      setFilterProducts(
        paginate(
          products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          ),
          1,
          page.pageSize
        )
      );
    }

    setSearch(search);
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 8 });
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
                        to={`/dashboard/product/view/${product.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {product.name}
                        </span>
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/product/viewProductType/${product.type.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {product.type.name}
                        </span>
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/product/viewProductCategory/${product.type.category_id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {product.type.category.name}
                        </span>
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
      <Pagination
        itemsCount={products.length}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default ProductsTable;
