import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Mapfunction = () => {
  const userss = [
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
    {
      id: 11,
      name: "y",
    },
    {
      id: 12,
      name: "z",
    },
    {
      id: 13,
      name: "k",
    },
    {
      id: 14,
      name: "l",
    },
    {
      id: 15,
      name: "p",
    },
    {
      id: 16,
      name: "i",
    },
    {
      id: 17,
      name: "n",
    },
    {
      id: 18,
      name: "m",
    },
    {
      id: 19,
      name: "o",
    },
    {
      id: 20,
      name: "xyz",
    },
  ];
  return (
    <ScrollView className=" h-full w-full">
      <View className="items-center h-full w-full">
        <Text className="text-3xl font-extrabold">List Using Mapfunction</Text>
        {userss.map((item) => (
          <Text style={styles.edit}>{[item.name, item.spex, item.id]}</Text>
        ))}
        {userss.map((item) => (
          <Text style={styles.edit}>{item.id}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Mapfunction;

const styles = StyleSheet.create({
  edit: {
    backgroundColor: "blue",
    height: 25,
    width: 300,
    margin: 10,
    fontSize: 20,
    color: "hsl(180,70%,53%)",
    paddingLeft: 5,
  },
});
