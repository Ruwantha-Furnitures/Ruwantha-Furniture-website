import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 15,
    display: "flex",
    width: "100%",
    // backgroundColor: "tomato",
    verticalAlign: "middle",
    // textAlign: "center",
  },
  reportTitle: {
    color: "#000000e0",
    fontSize: 20,
    textAlign: "center",
    // backgroundColor: "red",
    width: "100%",
  },
});

const Title = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default Title;
