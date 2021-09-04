import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#9e5c28";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#9e5c28",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  orderId: {
    width: "15%",
    // height: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    // backgroundColor: "red",
    paddingLeft: 8,
  },
  customer: {
    width: "40%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingLeft: 8,
  },
  method: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  items: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "20%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const CustomerTableRow = ({ items }) => {
  const rows = items.map((item, index) => (
    <View style={styles.row} key={index + 1}>
      <Text style={styles.orderId}>
        {item.id < 10
          ? "CU000" + item.id
          : item.id < 100
          ? "CU00" + item.id
          : "CU0" + item.id}
      </Text>
      <Text style={styles.customer}>
        {item.first_name + " " + item.last_name}
      </Text>
      <Text style={styles.method}>{item.product_items}</Text>
      <Text style={styles.items}>{item.total_orders}</Text>
      <Text style={styles.amount}>{item.total_order_amount}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default CustomerTableRow;
