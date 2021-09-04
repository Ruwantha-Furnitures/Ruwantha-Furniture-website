import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import DriverTableHeader from "./DriverTableHeader";
import DriverTableRow from "./DriverTableRow";
import DriverTableBlankSpace from "./DriverTableBlankSpace";
import DriverTableFooter from "./DriverTableFooter";

const tableRowsCount = 18;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#9e5c28",
    // backgroundColor: "yellow",
  },
  container: {
    height: 530,
  },
});

const DriverTable = ({ items }) => (
  <View style={styles.container} wrap={false}>
    <View style={styles.tableContainer}>
      <DriverTableHeader />
      <DriverTableRow items={items} />
      <DriverTableBlankSpace rowsCount={tableRowsCount - items.length} />
      <DriverTableFooter items={items} />
    </View>
  </View>
);

export default DriverTable;
