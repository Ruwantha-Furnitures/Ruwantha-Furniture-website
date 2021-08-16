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

function DeliveryDriverNotificationsTable() {
  const [deliveries, setDeliveries] = useState({
    id: 0,
    customer: {
      first_name: "",
      last_name: "",
    },
    order: {
      total_amount: 0,
    },
    createdAt: "",
  });

  const [search, setSearch] = useState("");
  const [filterDeliveries, setFilterDeliveries] = useState({});

  useEffect(() => {
    loadDeliveries();
  }, []);

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
          deliveryData.request_status === 1
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
      setFilterDeliveries(deliveries);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterDeliveries(deliveries);
    } else {
      setFilterDeliveries(
        deliveries.filter((delivery) =>
          (delivery.customer.first_name + " " + delivery.customer.last_name)
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  const handleAcceptDelivery = async (e, delivery_id) => {
    e.preventDefault();
    console.log("Accept Delviery: " + delivery_id);
    const delivery = {
      request_status: 0,
    };

    const result = await editDeliveryDetails(delivery_id, delivery);

    window.location = "/dashboard/deliveryDriver/notifications";
  };

  const handleDeclineDelivery = async (e, delivery_id) => {
    e.preventDefault();
    console.log("Decline Delviery: " + delivery_id);

    const result = await deleteDelivery(delivery_id);

    window.location = "/dashboard/deliveryDriver/notifications";
  };

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>
          Deliveries Notifications
        </h1>
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
                  placeholder="search customer here"
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
                <div className={TableStyle.header}>Delivery</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer</div>
              </th>
              <th>
                <div className={TableStyle.header}>Date</div>
              </th>
              <th>
                <div className={TableStyle.header}>Payment</div>
              </th>
              <th>
                <div className={TableStyle.header}>Accept</div>
              </th>
              <th>
                <div className={TableStyle.header}>Decline</div>
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
                        to={`/dashboard/deliveryDriverNotifications/details/${delivery.order_id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {"DO000" + delivery.id}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      {delivery.customer.first_name +
                        " " +
                        delivery.customer.last_name}
                    </td>
                    <td>{delivery.createdAt.split("T")[0]}</td>
                    <td>{"Rs." + delivery.order.total_product_amount}</td>
                    <td>
                      <span
                        className={
                          TableStyle.statusStyle +
                          " " +
                          TableStyle.statusColorCompleted
                        }
                        onClick={(e) => handleAcceptDelivery(e, delivery.id)}
                      >
                        Accept
                      </span>
                    </td>
                    <td>
                      <span
                        className={
                          TableStyle.statusStyle +
                          " " +
                          TableStyle.statusColorNotCompleted
                        }
                        onClick={(e) => handleDeclineDelivery(e, delivery.id)}
                      >
                        Decline
                      </span>
                    </td>
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

export default DeliveryDriverNotificationsTable;
