import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getMessages } from "./../../service/message";

function CustomersMessagesTable() {
  const [messages, setMessages] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    contact_number: 0,
    createdAt: "",
  });

  const [search, setSearch] = useState("");
  const [filterMessages, setFilterMessages] = useState({});

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const result = await getMessages();
      setMessages(result.data);
      setFilterMessages(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterMessages(messages);
    } else {
      setFilterMessages(
        messages.filter((message) =>
          (message.first_name + " " + message.last_name)
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Messages</h1>
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
                <div className={TableStyle.header}>Message Id</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer Name</div>
              </th>
              <th>
                <div className={TableStyle.header}>Email</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Date</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterMessages) === true && (
              <React.Fragment>
                {filterMessages.map((message, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to={`/dashboard/customerMessage/view/${message.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {message.id < 10
                            ? "MS000" + message.id
                            : message.id < 100
                            ? "MS00" + message.id
                            : "MS0" + message.id}
                        </span>
                      </Link>
                    </td>
                    <td>{message.first_name + " " + message.last_name}</td>
                    <td>{message.email}</td>
                    <td>{message.contact_number}</td>
                    <td>{message.createdAt.split("T")[0]}</td>
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

export default CustomersMessagesTable;
