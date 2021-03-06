import React, { useState, useEffect } from "react";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";
import Pagination from "./paginationSide";
import { paginate } from "./../utils/paginate";
import { getDeliveryCharges } from "./../service/deliveryCharges";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../css/dashboard/Products.module.css";

function AllProductsView() {
  const [loading, setLoading] = useState(false);
  const [charges, setCharges] = useState({
    id: 0,
    area: "",
    amount: 0,
  });

  const [filterCharges, setFilterCharges] = useState({});

  const [page, setPage] = useState({
    pageSize: 9,
    currentPage: 1,
  });

  useEffect(() => {
    loadChargesData();
  }, [page]);

  const loadChargesData = async () => {
    try {
      setLoading(true);
      const result = await getDeliveryCharges();
      if (result.status === 200) {
        setLoading(false);
      }
      setCharges(result.data);
      const data = paginate(result.data, page.currentPage, page.pageSize);
      setFilterCharges(data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 9 });
  };

  console.log(charges.length);

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
                Area Charges
              </h1>
            </div>
            <div className={AllProductViewStyle.allProductsTable}>
              {Array.isArray(filterCharges) === true && (
                <>
                  {filterCharges.map((charge, index) => (
                    <div
                      className={AllProductViewStyle.tooltip}
                      key={index + 1}
                    >
                      <div className={AllProductViewStyle.allProductsTableRow}>
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
                            {charge.area}
                          </h1>
                        </div>
                      </div>
                      <span className={AllProductViewStyle.tooltiptext}>
                        {"Charge is Rs." + charge.amount}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
            {/* Pagination */}
            <Pagination
              itemsCount={charges.length}
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
