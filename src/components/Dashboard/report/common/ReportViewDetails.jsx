import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import Joi from "joi-browser";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";

function OrderDetailsForm() {
  //   const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [years, setYears] = useState([]);
  const [annualOrderReportData, setAnnualOrderReportData] = useState({
    annual_order_year: "",
  });

  const [errorAnnualOrderReport, setErrorAnnualOrderReport] = useState({
    annual_order_year: "",
  });

  const [topProductsReportData, setTopProductsReportData] = useState({
    product_report_year: "",
  });

  const [errorTopProductsReportData, setErrorTopProductsReportData] = useState({
    product_report_year: "",
  });

  const [topCustomersReportData, setTopCustomersReportData] = useState({
    customer_report_year: "",
  });

  const [topDriversReportData, setTopDriversReportData] = useState({
    driver_report_year: "",
  });

  useEffect(() => {
    loadYears();
  }, []);

  const loadYears = () => {
    var years_array = [2021];
    const current_year = new Date().getFullYear();
    // const current_year = 2023;

    for (var i = 2022; i <= current_year; i++) {
      years_array.push(i);
    }

    // console.log(years_array);
    setYears(years_array);
  };

  console.log(years);

  const onInputChange = (e) => {
    if (e.target.name === "annual_order_year") {
      const newErrors = { ...errorAnnualOrderReport };
      if (parseInt(e.target.value) === 0) {
        newErrors[e.target.name] = "Please select year!!!";
      } else {
        delete newErrors[e.target.name];
      }
      setErrorAnnualOrderReport(newErrors);
      setAnnualOrderReportData({
        ...annualOrderReportData,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "product_report_year") {
      const newErrors = { ...errorTopProductsReportData };
      if (parseInt(e.target.value) === 0) {
        newErrors[e.target.name] = "Please select year!!!";
      } else {
        delete newErrors[e.target.name];
      }
      setErrorTopProductsReportData(newErrors);
      setTopProductsReportData({
        ...topProductsReportData,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "customer_report_year") {
      setTopCustomersReportData({
        ...topCustomersReportData,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "driver_report_year") {
      setTopDriversReportData({
        ...topDriversReportData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onAnnualOrderSubmit = (e) => {
    e.preventDefault();
    // console.log("OnSubmit");
    // console.log(annualOrderReportData);
    const year = parseInt(annualOrderReportData.annual_order_year);
    if (year > 0) {
      window.open(`/dashboard/annualOrderReport/${year}`, "_blank");
    }
  };

  const onTopProductSubmit = (e) => {
    e.preventDefault();
    // console.log("OnSubmit");
    // console.log(topProductsReportData);
    const year = parseInt(topProductsReportData.product_report_year);
    if (year > 0) {
      window.open(`/dashboard/topProductsReport/${year}`, "_blank");
    }
  };

  const onTopCustomerSubmit = (e) => {
    e.preventDefault();
    const year = parseInt(topCustomersReportData.customer_report_year);
    if (year > 0) {
      window.open(`/dashboard/topCustomersReport/${year}`, "_blank");
    }

    // console.log(year);
  };

  const onTopDriversSubmit = (e) => {
    e.preventDefault();
    const year = parseInt(topDriversReportData.driver_report_year);
    // console.log("onSubmit");
    // console.log(year);
    if (year > 0) {
      window.open(`/dashboard/topDriversReport/${year}`, "_blank");
    }

    // console.log(year);
  };

  // console.log(annualOrderReportData);

  console.log(
    "AnnualOrderError ",
    Object.keys(errorAnnualOrderReport).length === 0
  );
  console.log("Errors", errorAnnualOrderReport);
  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div className={ProductViewFormStyle.titleHeader}>
            <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
              Report View Details
            </h1>
          </div>

          {/* Product Report */}
          <div className={ProductViewFormStyle.details}>
            <div className={ProductViewFormStyle.infoPart}>
              <div className={ProductViewFormStyle.form}>
                <form onSubmit={(e) => onAnnualOrderSubmit(e)}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Annual Orders Report
                  </h1>
                  <div
                    className={
                      errorAnnualOrderReport["annual_order_year"]
                        ? ProductViewFormStyle.formLineError
                        : ProductViewFormStyle.formLine +
                          " " +
                          ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.inputFormSide}>
                      <div className={ProductViewFormStyle.dataForm}>
                        <label className={ProductViewFormStyle.labelStyle}>
                          Select Year
                        </label>
                        <select
                          className={ProductViewFormStyle.inputFormSelectStyle}
                          name="annual_order_year"
                          onChange={onInputChange}
                          required
                        >
                          <option value="0">Select Year</option>
                          {Array.isArray(years) === true && (
                            <>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </>
                          )}
                          {/* <option value="2021">2021</option> */}
                        </select>
                      </div>
                      {errorAnnualOrderReport["annual_order_year"] && (
                        <div className={ProductViewFormStyle.inputErrorDesc}>
                          <span
                            className={
                              "material-icons " + ProductViewFormStyle.iconWidth
                            }
                          >
                            error
                          </span>
                          <span className={ProductViewFormStyle.inputErrorText}>
                            "Select Year" is not allowed to be empty
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Report Type
                      </label>
                      <input
                        type="text"
                        value={"Orders"}
                        placeholder="Gihan"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div
                      className={
                        ProductViewFormStyle.dataforLong +
                        " " +
                        ProductViewFormStyle.addInlineFlex
                      }
                    >
                      <label
                        className={
                          ProductViewFormStyle.labelStyleforLong +
                          " " +
                          ProductViewFormStyle.addMarginBottom
                        }
                      >
                        Report
                      </label>
                      <textarea
                        value="Simple ladder back chair with a clean finish crafted usin treated wood for lasting strength. Ample seating capacity with attractive soft padded fabric upholstery will provide a satisfactory seating."
                        placeholder="Customer Message..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        disabled={
                          Object.keys(errorAnnualOrderReport).length === 0
                            ? false
                            : true
                        }
                        className={ProductViewFormStyle.descButtonAddStyle}
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={ProductViewFormStyle.details}>
            <div className={ProductViewFormStyle.infoPart}>
              <div className={ProductViewFormStyle.form}>
                <form onSubmit={(e) => onTopProductSubmit(e)}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Top Products Report
                  </h1>
                  <div
                    className={
                      ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.inputFormSide}>
                      <div className={ProductViewFormStyle.dataForm}>
                        <label className={ProductViewFormStyle.labelStyle}>
                          Select Year
                        </label>
                        <select
                          className={ProductViewFormStyle.inputFormSelectStyle}
                          name="product_report_year"
                          onChange={onInputChange}
                          required
                        >
                          <option value="0">Select Year</option>
                          {Array.isArray(years) === true && (
                            <>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                      </div>
                      {errorAnnualOrderReport["product_report_year"] && (
                        <div className={ProductViewFormStyle.inputErrorDesc}>
                          <span
                            className={
                              "material-icons " + ProductViewFormStyle.iconWidth
                            }
                          >
                            error
                          </span>
                          <span className={ProductViewFormStyle.inputErrorText}>
                            "Type" is not allowed to be empty
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Report Type
                      </label>
                      <input
                        type="text"
                        value={"Products"}
                        placeholder="Gihan"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div
                      className={
                        ProductViewFormStyle.dataforLong +
                        " " +
                        ProductViewFormStyle.addInlineFlex
                      }
                    >
                      <label
                        className={
                          ProductViewFormStyle.labelStyleforLong +
                          " " +
                          ProductViewFormStyle.addMarginBottom
                        }
                      >
                        Report
                      </label>
                      <textarea
                        value="Simple ladder back chair with a clean finish crafted usin treated wood for lasting strength. Ample seating capacity with attractive soft padded fabric upholstery will provide a satisfactory seating."
                        placeholder="Customer Message..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={ProductViewFormStyle.details}>
            <div className={ProductViewFormStyle.infoPart}>
              <div className={ProductViewFormStyle.form}>
                <form onSubmit={(e) => onTopCustomerSubmit(e)}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Top Customers Report
                  </h1>
                  <div
                    className={
                      ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Select Year
                      </label>
                      <select
                        className={ProductViewFormStyle.inputFormSelectStyle}
                        name="customer_report_year"
                        onChange={onInputChange}
                        required
                      >
                        <option value="0">Select Year</option>
                        {Array.isArray(years) === true && (
                          <>
                            {years.map((year, index) => (
                              <option key={index} value={year}>
                                {year}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Report Type
                      </label>
                      <input
                        type="text"
                        value={"Customers"}
                        placeholder="Gihan"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div
                      className={
                        ProductViewFormStyle.dataforLong +
                        " " +
                        ProductViewFormStyle.addInlineFlex
                      }
                    >
                      <label
                        className={
                          ProductViewFormStyle.labelStyleforLong +
                          " " +
                          ProductViewFormStyle.addMarginBottom
                        }
                      >
                        Report
                      </label>
                      <textarea
                        value="Simple ladder back chair with a clean finish crafted usin treated wood for lasting strength. Ample seating capacity with attractive soft padded fabric upholstery will provide a satisfactory seating."
                        placeholder="Customer Message..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={ProductViewFormStyle.details}>
            <div className={ProductViewFormStyle.infoPart}>
              <div className={ProductViewFormStyle.form}>
                <form onSubmit={(e) => onTopDriversSubmit(e)}>
                  <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                    Top Delivery Drivers Report
                  </h1>
                  <div
                    className={
                      ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Select Year
                      </label>
                      <select
                        className={ProductViewFormStyle.inputFormSelectStyle}
                        name="driver_report_year"
                        onChange={onInputChange}
                        required
                      >
                        <option value="0">Select Year</option>
                        {Array.isArray(years) === true && (
                          <>
                            {years.map((year, index) => (
                              <option key={index} value={year}>
                                {year}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Report Type
                      </label>
                      <input
                        type="text"
                        value={"Delivery Drivers"}
                        placeholder="Gihan"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div
                      className={
                        ProductViewFormStyle.dataforLong +
                        " " +
                        ProductViewFormStyle.addInlineFlex
                      }
                    >
                      <label
                        className={
                          ProductViewFormStyle.labelStyleforLong +
                          " " +
                          ProductViewFormStyle.addMarginBottom
                        }
                      >
                        Report
                      </label>
                      <textarea
                        value="Simple ladder back chair with a clean finish crafted usin treated wood for lasting strength. Ample seating capacity with attractive soft padded fabric upholstery will provide a satisfactory seating."
                        placeholder="Customer Message..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default OrderDetailsForm;
