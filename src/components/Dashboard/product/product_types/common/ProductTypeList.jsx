import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { getProductTypes } from "./../../../service/productType";
import { getProductCategories } from "./../../../service/productCategory";
import Pagination from "../../../common/paginationSide";
import { paginate } from "../../../utils/paginate";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../../css/dashboard/Products.module.css";

function ProductTypeList({ categoryId }) {
  console.log(categoryId);

  const [types, setTypes] = useState({
    name: "",
    category_id: 0,
    category: {},
  });

  const [loading, setLoading] = useState(false);

  const [filterTypes, setFilterTypes] = useState({
    name: "",
    category_id: 0,
    category: {},
  });

  const [category, setCategory] = useState({
    name: "",
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  useEffect(() => {
    loadTypes();
  }, [categoryId, page]);

  const loadTypes = async () => {
    try {
      setLoading(true);
      const result = await getProductTypes();
      const resultCategories = await getProductCategories();
      if (result.status === 200 && resultCategories.status === 200) {
        setLoading(false);
      }
      var category_id;
      if (categoryId !== 0) {
        category_id = categoryId;
      }
      var typesResult = result.data.filter(
        (type) => type.category_id == category_id
      );

      setCategory(
        resultCategories.data.filter(
          (category) => category.id == category_id
        )[0]
      );
      setTypes(typesResult);
      const data = paginate(typesResult, page.currentPage, page.pageSize);
      setFilterTypes(data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 8 });
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={15} />
        </div>
      ) : (
        <>
          <h1 className={ProductViewFormStyle.productTypeTitle}>
            {category === undefined ? "Select Category" : category.name}
          </h1>
          <div className={ProductViewFormStyle.productTypeHeight}>
            {Array.isArray(filterTypes) === true && (
              <React.Fragment>
                {filterTypes.map((type, index) => (
                  <div
                    key={index + 1}
                    className={ProductViewFormStyle.productType}
                  >
                    <span
                      className={
                        "material-icons " + ProductViewFormStyle.iconSize
                      }
                    >
                      circle
                    </span>
                    <Link
                      to={`/dashboard/product/viewProductType/${type.id}`}
                      className={ProductViewFormStyle.linkStyle}
                    >
                      <h1 className={ProductViewFormStyle.productTypeName}>
                        {type.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </React.Fragment>
            )}
          </div>
          <div className={ProductViewFormStyle.productTypePagination}>
            <Pagination
              itemsCount={types.length}
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

export default ProductTypeList;
