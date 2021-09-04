import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#9e5c28";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#9e5c28",
    backgroundColor: "#d87e39",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  orderId: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    // backgroundColor: "red",
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

const DriverTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.orderId}>Driver ID</Text>
    <Text style={styles.customer}>Driver</Text>
    <Text style={styles.method}>Orders</Text>
    <Text style={styles.items}>Items</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default DriverTableHeader;
