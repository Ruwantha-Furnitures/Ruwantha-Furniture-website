import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pdfNoContainer: {
    flexDirection: "row",
    marginTop: 0,
    justifyContent: "flex-end",
    // backgroundColor: "orange",
  },
  pdfDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: "orange",
  },
  pdfNoDates: {
    width: 62,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  pdfDate: {
    fontSize: 12,
    fontStyle: "bold",
    // backgroundColor: "green",
  },
  label: {
    width: 60,
    // backgroundColor: "red",
  },
});

var today = new Date();
var current_date = today.toISOString().split("T")[0];

const PdfNo = ({ year }) => (
  <Fragment>
    <View style={styles.pdfNoContainer}>
      <Text style={styles.label}>Report Year:</Text>
      <View style={styles.pdfNoDates}>
        <Text style={styles.pdfDate}>{year}</Text>
      </View>
    </View>
    <View style={styles.pdfDateContainer}>
      <Text style={styles.label}>Date: </Text>
      <Text style={styles.pdfDate}>{current_date}</Text>
    </View>
  </Fragment>
);

export default PdfNo;