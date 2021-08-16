import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import Auth from "../../service/auth";
import { getDeliveryDrivers } from "./../../service/deliveryDriver";

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

  const [search, setSearch] = useState("");
  const [filterDeliveryDrivers, setFilterDeliveryDrivers] = useState({});

  useEffect(() => {
    loadDeliveryDrivers();
  }, []);

  const loadDeliveryDrivers = async () => {
    try {
      const result = await getDeliveryDrivers();

      // console.log(resultCategories.data);
      const drivers = result.data;

      setDeliveryDrivers(drivers);
      setFilterDeliveryDrivers(drivers);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterDeliveryDrivers(deliveryDrivers);
    } else {
      setFilterDeliveryDrivers(
        deliveryDrivers.filter((driver) =>
          (driver.first_name + " " + driver.last_name)
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
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
                  placeholder="search driver here"
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
                  Delivery Driver
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
                <div className={TableStyle.header}>Contact Number</div>
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
                    <td>{driver.telephone}</td>
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
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Tharindu Gihan
                </Link>
              </td>
              <td>wtgihan@gmail.com</td>
              <td>0778522736</td>
              <td>Rs.25000</td>
              <td>Galle</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Himasha Anjali
                </Link>
              </td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Mulleriayawa</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Sathira Dimuthu
                </Link>
              </td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Meepawala</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Anushka Tharindu
                </Link>
              </td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Rs.45000</td>
              <td>Gonapura</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Himasha Anjali
                </Link>
              </td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Colombo</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Sathira Dimuthu
                </Link>
              </td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Beddegama</td>
            </tr> */}
            {/* <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Anushka Tharindu
                </Link>
              </td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Rs.45000</td>
              <td>Borella</td>
            </tr> */}
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

export default DeliveryDriversTable;
