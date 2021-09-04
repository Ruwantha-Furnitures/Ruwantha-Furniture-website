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
    color: "white",
  },
  orderId: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  customer: {
    width: "40%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  method: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  items: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "20%",
  },
});

const CustomerTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.orderId}>-</Text>
      <Text style={styles.customer}>-</Text>
      <Text style={styles.method}>-</Text>
      <Text style={styles.items}>-</Text>
      <Text style={styles.amount}>-</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default CustomerTableBlankSpace;
