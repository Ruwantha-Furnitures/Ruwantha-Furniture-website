import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    // marginTop: 36,
    // backgroundColor: "red",
  },
  billTo: {
    // marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica",
  },
});

const PdfTo = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>G.G.S. Gunawardana</Text>
    <Text>ARMagic Group Owner</Text>
    <Text>No. 10, Nuge Asala, Nauththuduwa, Matugama</Text>
    <Text>+94 8522 736</Text>
    <Text>armagic@gmail.com</Text>
  </View>
);

export default PdfTo;