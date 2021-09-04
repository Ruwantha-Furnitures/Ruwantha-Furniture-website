import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import CustomerTableHeader from "./CustomerTableHeader";
import CustomerTableRow from "./CustomerTableRow";
import CustomerTableBlankSpace from "./CustomerTableBlankSpace";
import CustomerTableFooter from "./CustomerTableFooter";

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

const CustomerTable = ({ items }) => (
  <View style={styles.container} wrap={false}>
    <View style={styles.tableContainer}>
      <CustomerTableHeader />
      <CustomerTableRow items={items} />
      <CustomerTableBlankSpace rowsCount={tableRowsCount - items.length} />
      <CustomerTableFooter items={items} />
    </View>
  </View>
);

export default CustomerTable;
