import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Grid = () => {
  return (
    <View className=" h-full w-full bg-slate-500">
      <Text className="font-extrabold text-3xl ml-[150]">GRID</Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={styles.edit}>A</Text>
        <Text style={styles.edit}>B</Text>
        <Text style={styles.edit}>C</Text>
        <Text style={styles.edit}>D</Text>
        <Text style={styles.edit}>E</Text>
        <Text style={styles.edit}>F</Text>
        <Text style={styles.edit}>G</Text>
        <Text style={styles.edit}>H</Text>
        <Text style={styles.edit}>I</Text>
        <Text style={styles.edit}>J</Text>
        <Text style={styles.edit}>K</Text>
        <Text style={styles.edit}>L</Text>
      </View>
      <Grid_2 />
    </View>
  );
};

export default Grid;

const Grid_2 = () => {
  const users = [
    {
      id: 1,
      spex: " ",
      name: "abc",
    },
    {
      id: 2,
      spex: " -> ",
      name: "def",
    },
    {
      id: 3,
      name: "jkl",
    },
    {
      id: 4,
      name: "mnop",
    },
    {
      id: 5,
      name: "q",
    },
    {
      id: 6,
      name: "r",
    },
    {
      id: 7,
      name: "s",
    },
    {
      id: 8,
      name: "t",
    },
    {
      id: 9,
      name: "w",
    },
    {
      id: 10,
      name: "x",
    },
  ];
  return (
    <View className="h-full w-full bg-slate-500">
      <Text className="font-extrabold text-l ml-[110]">
        Grid With Map Function
      </Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {users.map((item) => (
          <Text style={styles.edit}>{item.id}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    height: 50,
    width: 70,
    backgroundColor: "red",
    color: "blue",
    textAlignVertical: "center",
    textAlign: "center",
    margin: 10,
  },
});
