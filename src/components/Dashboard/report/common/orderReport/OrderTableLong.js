import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";
import OrderTableBlankSpace from "./OrderTableBlankSpace";
import OrderTableFooter from "./OrderTableFooter";

const tableRowsCount = 28;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // marginTop: 10,
    borderWidth: 1,
    borderColor: "#9e5c28",
    // backgroundColor: "yellow",
  },
  container: {
    height: 750,
    // backgroundColor: "yellow",
  },
});

const OrdersTableLong = ({ items }) => (
  <View style={styles.container} wrap={false}>
    <View style={styles.tableContainer}>
      <OrderTableHeader />
      <OrderTableRow items={items} />
      <OrderTableBlankSpace rowsCount={tableRowsCount - items.length} />
      <OrderTableFooter items={items} />
    </View>
  </View>
);

export default OrdersTableLong;
