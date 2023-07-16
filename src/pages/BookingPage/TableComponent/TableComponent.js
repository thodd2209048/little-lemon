import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./TableComponent.module.scss";
import images from "~/assets/images";

TableComponent.propTypes = {};

function TableComponent(props) {
  const [tableList, setTableList] = useState([
    { name: "a", status: "Active", size: "table" },
    { name: "b", status: "Active", size: "table" },
    { name: "c", status: "Active", size: "table" },
    { name: "d", status: "Active", size: "table" },
    { name: "e", status: "Empty", size: "bigTable" },
    { name: "f", status: "Active", size: "table" },
    { name: "g", status: "Active", size: "table" },
    { name: "h", status: "Active", size: "table" },
    { name: "i", status: "Active", size: "table" },
    { name: "j", status: "Active", size: "table" },
    { name: "k", status: "Inactive", size: "table" },
    { name: "l", status: "Active", size: "table" },
    { name: "m", status: "Inactive", size: "table" },
    { name: "n", status: "Active", size: "table" },
    { name: "o", status: "Empty", size: "bigTable" },
    { name: "p", status: "Empty", size: "table" },
  ]);

  const handleStatus = (currentTable) => {
    const updateTableList = tableList.map((table) => {
      if (table.name === currentTable) {
        return {
          ...table,
          status: table.status === "Empty" ? "Active" : "Empty",
        };
      }
      return table;
    });

    setTableList(updateTableList);
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.display)}>
        {tableList.map((table) => {
          const tableStatus = table.size + table.status;
          return (
            <div
              key={table.name}
              style={{ gridArea: table.name }}
              className={clsx(
                styles.table,
                styles[table.name],
                styles[table.status]
              )}
            >
              <img
                src={images[tableStatus]}
                onClick={() => handleStatus(table.name)}
                alt=""
              />
              <p
                className={clsx(styles.tableName)}
                onClick={(e) => e.target.previousSibling.click()}
              >
                {table.name}
              </p>
            </div>
          );
        })}
        <div className={clsx(styles.area)} style={{ gridArea: "entry" }}>
          entry
        </div>
        <div className={clsx(styles.area)} style={{ gridArea: "kitchen" }}>
          Opened kitchen
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
