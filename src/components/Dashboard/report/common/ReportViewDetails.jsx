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

  const [errorTopCustomersReportData, setErrorTopCustomersReportData] =
    useState({
      customer_report_year: "",
    });

  const [topDriversReportData, setTopDriversReportData] = useState({
    driver_report_year: "",
  });

  const [errorTopDriversReportData, setErrorTopDriversReportData] = useState({
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
      const newErrors = { ...errorTopCustomersReportData };
      if (parseInt(e.target.value) === 0) {
        newErrors[e.target.name] = "Please select year!!!";
      } else {
        delete newErrors[e.target.name];
      }
      setErrorTopCustomersReportData(newErrors);
      setTopCustomersReportData({
        ...topCustomersReportData,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "driver_report_year") {
      const newErrors = { ...errorTopDriversReportData };
      if (parseInt(e.target.value) === 0) {
        newErrors[e.target.name] = "Please select year!!!";
      } else {
        delete newErrors[e.target.name];
      }
      setErrorTopDriversReportData(newErrors);
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

  // console.log(
  //   "AnnualOrderError ",
  //   Object.keys(errorAnnualOrderReport).length === 0
  // );
  console.log("Errors", errorTopProductsReportData);
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
                        value="The annual orders report will show you all of the orders that were placed during the specified year. According to the selected year, you will see the total amount you earned from those orders."
                        placeholder="Annual Order Description"
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
                      errorTopProductsReportData["product_report_year"]
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
                      {errorTopProductsReportData["product_report_year"] && (
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
                        value="The top products report will show you which products were the most popular during the chosen year. With the product's information, you can find out how many units were sold."
                        placeholder="Top Product Description..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                        disabled={
                          Object.keys(errorTopProductsReportData).length === 0
                            ? false
                            : true
                        }
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
                      errorTopCustomersReportData["customer_report_year"]
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
                      {errorTopCustomersReportData["customer_report_year"] && (
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
                        value="The top customers report will give you details on the top customers who placed orders during the specified year. Customers will be listed in ascending order based on the number of orders they completed during the selected year. You'll learn how many orders that particular consumer has completed."
                        placeholder="Top Customer Report..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                        disabled={
                          Object.keys(errorTopCustomersReportData).length === 0
                            ? false
                            : true
                        }
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
                      errorTopDriversReportData["driver_report_year"]
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
                      {errorTopDriversReportData["driver_report_year"] && (
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
                        value="The top drivers report will give you details on the top drivers who delivered orders during the chosen year. The list of drivers will be sorted in ascending order by the number of orders they delivered in the chosen year. You'll learn how many orders that individual driver has delivered."
                        placeholder="Top Drivers Report Description..."
                        className={ProductViewFormStyle.labelStyleforLongDesc}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.descButtonsAddReport}>
                    <div className={ProductViewFormStyle.descButtonAdd}>
                      <button
                        className={ProductViewFormStyle.descButtonAddStyle}
                        disabled={
                          Object.keys(errorTopDriversReportData).length === 0
                            ? false
                            : true
                        }
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
