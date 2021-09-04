import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../../../assets/nlogo.png";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 0,
    display: "flex",
    // backgroundColor: "yellow",
  },
  headerTitle: {
    color: "#542b14",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "heavy",
  },
  logo: {
    width: 50,
    height: 55,
    backgroundPosition: "center",
    verticalAlign: " middle",
    // backgroundColor: "red",
  },
  companyHeader: {
    marginLeft: 9,
  },
  minHeaderTitle: {
    color: "#542b14",
    fontSize: 16,
    textAlign: "center",
  },
});

const Header = () => (
  <View style={styles.titleContainer}>
    <Image style={styles.logo} src={logo} />
    <View style={styles.companyHeader}>
      <Text style={styles.headerTitle}>Ruwantha Furniture</Text>
      <Text style={styles.minHeaderTitle}>Online Furniture Sales Paltform</Text>
    </View>
  </View>
);

export default Header;
