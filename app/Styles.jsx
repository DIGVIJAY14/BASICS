import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExStyle from "./Extt/ExStyle";

const Styles = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: "#f08822" }}>INline style</Text>
      <Text style={styles.edit}>Internal</Text>
      <Text style={styles.editss}>Styles</Text>
      <Text style={ExStyle.edit}>External</Text>
      <Text style={[ExStyle.edit, styles.edit]}>Styles</Text>
    </View>
  );
};

export default Styles;

const styles = StyleSheet.create({
  edit: {
    color: "blue",
    fontSize: 20,
    backgroundColor: "black",
    marginBottom: 5,
    padding: 5,
    borderRadius: 20,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "yellow",
    borderWidth: 5,
  },
  editss: {
    color: "red",
    fontSize: 30,
  },
});
