import React, { useState, useEffect } from "react";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";
import { Link } from "react-router-dom";
import Pagination from "./paginationSide";
import { paginate } from "./../utils/paginate";
import { getProductCategories } from "./../service/productCategory";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../css/dashboard/Products.module.css";

function AllProductsView() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState({
    id: 0,
    name: "",
  });

  const [filterCategories, setFilterCategories] = useState({});

  const [page, setPage] = useState({
    pageSize: 9,
    currentPage: 1,
  });

  useEffect(() => {
    loadCategoriesData();
  }, [page]);

  const loadCategoriesData = async () => {
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
      console.log("Error", error.message);
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 9 });
  };

  return (
    <React.Fragment>
      <div className={AllProductViewStyle.allProductsSection}>
        {loading ? (
          <div className={ProductStyle.loader}>
            <PropagateLoader color={"#542B14"} loading={loading} size={15} />
          </div>
        ) : (
          <>
            <div className={AllProductViewStyle.allProductsLabel}>
              <h1 className={AllProductViewStyle.allProductsLabelStyle}>
                All Categories
              </h1>
            </div>
            <div className={AllProductViewStyle.allProductsTable}>
              {Array.isArray(filterCategories) === true && (
                <>
                  {filterCategories.map((category, index) => (
                    <div
                      className={AllProductViewStyle.allProductsTableRow}
                      key={index + 1}
                    >
                      <div
                        className={AllProductViewStyle.allProductsRowPointer}
                      >
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
                        <h1
                          className={
                            AllProductViewStyle.allProductsRowTextStyle
                          }
                        >
                          {category.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {/* Pagination */}
            <Pagination
              itemsCount={categories.length}
              pageSize={page.pageSize}
              currentPage={page.currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default AllProductsView;
