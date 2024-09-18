import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Flatlistt = () => {
  const users = [
    {
      id: 14,
      name: "abc",
    },
    {
      id: 1,
      name: "def",
    },
    {
      id: 5,
      name: "jkl",
    },
    {
      id: 100,
      name: "mnop",
    },
  ];
  return (
    <View className="items-center h-full w-full">
      <Text className="text-3xl font-extrabold">Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Flatlistt;

const styles = StyleSheet.create({});
