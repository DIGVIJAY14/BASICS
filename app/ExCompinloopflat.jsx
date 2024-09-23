import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default ExCompinloopflat = (paprops) => {
  const item = paprops.call;
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.e_mail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    borderWidth: 7,
    borderColor: "red",
    margin: 5,
  },
  text: {
    flex: 1,
    // backgroundColor: "green",
    color: "black",

    fontSize: 20,
    height: 50,
    padding: 10,
    paddingBottom: 5,
  },
});
