import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Flatlistt = () => {
  // const reply = ["hey", "hyy", "hello", "hiee"];
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
        renderItem={({ item }) => (
          <Text style={styles.edit} className="font-extrabold">
            {item.name}
          </Text>
        )} // used in arrays to load items from flatlist (item or anyvalue)
        // keyExtractor={(item) => item.id}
      />
      {/*  normal array */}
      {/* <FlatList
        data={reply}
        renderItem={({ itemss }) => (
          <Text style={styles.edit} className="font-extrabold">
            {itemss.reply}
          </Text>
        )}
      /> */}
    </View>
  );
};

export default Flatlistt;

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
