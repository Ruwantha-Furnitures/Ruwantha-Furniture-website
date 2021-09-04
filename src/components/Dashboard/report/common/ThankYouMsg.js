import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
    display: "flex",
    // backgroundColor: "red",
    alignItems: "center",
  },
  reportTitle: {
    fontSize: 10,
    textAlign: "center",
    // backgroundColor: "yellow",
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    // textTransform: "uppercase",
  },
});

const ThankYouMsg = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Created By AR Magic Development Team</Text>
  </View>
);

export default ThankYouMsg;
