import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExCompinloopflat from "./ExCompinloopflat";

const Compinloopflat = () => {
  const users = [
    {
      id: 1,
      name: "DV",
      e_mail: "dv@gmail.com",
    },
    {
      id: 2,
      name: "CR",
      e_mail: "cr@gmail.com",
    },
    {
      id: 3,
      name: "DC",
      e_mail: "dc@gmail.com",
    },
  ];
  return (
    <View className="h-full w-full bg-red-400">
      <Text className="text-2xl ml-[105] font-extrabold mb-[10] mt-[10]">
        Compinloopflat
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <ExCompinloopflat
            call={item}
            // detail="xyz"
            // no need to call again ExCompinloopflat
          />
        )}
      />
    </View>
  );
};

export default Compinloopflat;
