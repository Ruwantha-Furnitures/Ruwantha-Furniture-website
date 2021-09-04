import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { getProductCategories } from "./../../../service/productCategory";
import Pagination from "../../../common/paginationSide";
import { paginate } from "../../../utils/paginate";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../../css/dashboard/Products.module.css";

function ProductCategoryList() {
  const [categories, setCategories] = useState({});
  const [filterCategories, setFilterCategories] = useState({});

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  useEffect(() => {
    loadCategories();
  }, [page]);

  const [loading, setLoading] = useState(false);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const result = await getProductCategories();
      if (result.status === 200) {
        setLoading(false);
      }
      setCategories(result.data);
      const data = paginate(result.data, page.currentPage, page.pageSize);
      setFilterCategories(data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 8 });
  };

  // console.log(categories);
  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={15} />
        </div>
      ) : (
        <>
          <h1 className={ProductViewFormStyle.productTypeTitle}>Categories</h1>
          <div className={ProductViewFormStyle.productTypeHeight}>
            {Array.isArray(filterCategories) === true && (
              <React.Fragment>
                {filterCategories.map((category, index) => (
                  <div
                    className={ProductViewFormStyle.productType}
                    key={index + 1}
                  >
                    <span
                      className={
                        "material-icons " + ProductViewFormStyle.iconSize
                      }
                    >
                      circle
                    </span>
                    <Link
                      to={`/dashboard/product/viewProductCategory/${category.id}`}
                      className={ProductViewFormStyle.linkStyle}
                    >
                      <h1 className={ProductViewFormStyle.productTypeName}>
                        {category.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </React.Fragment>
            )}
          </div>
          <div className={ProductViewFormStyle.productTypePagination}>
            <Pagination
              itemsCount={categories.length}
              pageSize={page.pageSize}
              currentPage={page.currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default ProductCategoryList;
