import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import Auth from "../../service/auth";
import { getDeliveryDrivers } from "./../../service/deliveryDriver";
import {
  editDeliveryDetails,
  getDeliveries,
  deleteDelivery,
} from "./../../service/delivery";
import { getCustomers } from "./../../service/customer";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";

function DeliveriesTable() {
  const [deliveries, setDeliveries] = useState({
    id: 0,
    customer: {
      first_name: "",
      last_name: "",
      contact_number: "",
    },
    order: {
      total_amount: 0,
    },
    createdAt: "",
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterDeliveries, setFilterDeliveries] = useState({});

  useEffect(() => {
    loadDeliveries();
  }, [page]);

  const loadDeliveries = async () => {
    try {
      const user_email = Auth.getCurrentUserEmail();
      const result = await getDeliveryDrivers();
      const driver = result.data.filter(
        (driver) => driver.account.email === user_email
      )[0];
      const driver_id = driver.id;

      // get total deliveries
      const resultDeliveries = await getDeliveries();
      const deliveries = resultDeliveries.data.filter(
        (deliveryData) =>
          deliveryData.delivery_driver_id === driver_id &&
          deliveryData.request_status === 0
      );

      // get total customer
      const resultCustomers = await getCustomers();
      const customersData = resultCustomers.data;

      deliveries.forEach((delivery) => {
        var customerData = customersData.filter(
          (customerData) => customerData.id === delivery.order.customer_id
        )[0];

        delivery.customer = customerData;

        // console.log(delivery);
      });

      console.log(deliveries);
      setDeliveries(deliveries);
      setFilterDeliveries(
        paginate(deliveries, page.currentPage, page.pageSize)
      );
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterDeliveries(
        paginate(deliveries, page.currentPage, page.pageSize)
      );
    } else {
      setFilterDeliveries(
        paginate(
          deliveries.filter((delivery) =>
            (delivery.customer.first_name + " " + delivery.customer.last_name)
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

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Driver Deliveries</h1>
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
                  placeholder="Search customer here"
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
                <div className={TableStyle.header}>Delivery Id</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Order Date</div>
              </th>
              <th>
                <div className={TableStyle.header}>Status</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterDeliveries) === true && (
              <React.Fragment>
                {filterDeliveries.map((delivery, index) => (
                  <tr key={index}>
                    <td>
                      <Link
                        to={`/dashboard/deliveryDriver/details/${delivery.order_id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {delivery.id < 10
                            ? "DO000" + delivery.id
                            : delivery.id < 100
                            ? "DO00" + delivery.id
                            : "DO0" + delivery.id}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {delivery.customer.first_name +
                        " " +
                        delivery.customer.last_name}
                    </td>
                    <td>{"0" + delivery.customer.contact_number}</td>
                    <td>{delivery.createdAt.split("T")[0]}</td>
                    <td>
                      {delivery.complete_status === 0 ? (
                        <React.Fragment>
                          <span
                            className={
                              TableStyle.statusStyle +
                              " " +
                              TableStyle.statusColorNotAvailabile
                            }
                          >
                            NotCompleted
                          </span>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <span
                            className={
                              TableStyle.statusStyle +
                              " " +
                              TableStyle.statusColorAvailabile
                            }
                          >
                            Completed
                          </span>
                        </React.Fragment>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        itemsCount={deliveries.length}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default DeliveriesTable;
