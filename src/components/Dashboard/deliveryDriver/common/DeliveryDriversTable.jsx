import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import Auth from "../../service/auth";
import { getDeliveryDrivers } from "./../../service/deliveryDriver";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";

function DeliveryDriversTable() {
  const user = Auth.getCurrentUser();

  const [deliveryDrivers, setDeliveryDrivers] = useState({
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
    account: {
      email: "",
    },
    availabilty: 0,
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterDeliveryDrivers, setFilterDeliveryDrivers] = useState({});

  useEffect(() => {
    loadDeliveryDrivers();
  }, [page]);

  const loadDeliveryDrivers = async () => {
    try {
      const result = await getDeliveryDrivers();

      // console.log(resultCategories.data);
      const drivers = result.data;

      setDeliveryDrivers(drivers);
      setFilterDeliveryDrivers(
        paginate(drivers, page.currentPage, page.pageSize)
      );
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterDeliveryDrivers(
        paginate(deliveryDrivers, page.currentPage, page.pageSize)
      );
    } else {
      setFilterDeliveryDrivers(
        paginate(
          deliveryDrivers.filter((driver) =>
            (driver.first_name + " " + driver.last_name)
              .toLowerCase()
              .includes(search.toLowerCase())
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

  console.log(filterDeliveryDrivers);

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Delivery Drivers</h1>
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
                  placeholder="Search driver here"
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
                <div className={TableStyle.header}>Driver ID</div>
              </th>
              <th>
                <div className={TableStyle.header}>
                  Driver
                  {user === "Owner" && (
                    <Link
                      to="/dashboard/deliveryDriver/profile"
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
                <div className={TableStyle.header}>Email</div>
              </th>
              <th>
                <div className={TableStyle.header}>Telephone</div>
              </th>
              <th>
                <div className={TableStyle.header}>Availabilty</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterDeliveryDrivers) === true && (
              <React.Fragment>
                {filterDeliveryDrivers.map((driver, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to={`/dashboard/deliveryDriver/view/${driver.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {driver.id < 10
                            ? "DD000" + driver.id
                            : driver.id < 100
                            ? "DD00" + driver.id
                            : "DD0" + driver.id}
                        </span>
                      </Link>
                    </td>
                    <td> {driver.first_name + " " + driver.last_name}</td>
                    <td>{driver.account.email}</td>
                    <td>{"0" + driver.telephone}</td>
                    <td>
                      <span
                        className={
                          TableStyle.statusStyle +
                          " " +
                          (driver.availability === 1
                            ? TableStyle.statusColorAvailabile
                            : TableStyle.statusColorNotAvailabile)
                        }
                      >
                        {driver.availability === 1
                          ? "Avaialable"
                          : "NotAvailable"}
                      </span>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        itemsCount={deliveryDrivers.length}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default DeliveryDriversTable;
