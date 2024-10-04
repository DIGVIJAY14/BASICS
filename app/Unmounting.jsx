import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";

const Unmounting = () => {
  const [s1, s2] = useState(true);
  return (
    <View className="h-[120] bg-lime-500 ">
      <Text className="text-xl  font-extrabold ml-[130]  ">Unmounting</Text>
      <View className="m-[10] ">
        <Button title="Click here" onPress={() => s2(!s1)} />
      </View>
      {s1 ? <External /> : null}
    </View>
  );
};

const External = () => {
  // let timer = setInterval(() => {
  //   console.warn("blink");
  // }, 2000);

  // useEffect(() => {
  //   return () => clearInterval(timer);
  // });
  return (
    <View>
      <Text
        style={styles.edit}
        className="text-xl font-bold mt-[5] underline ml-[135] "
      >
        CHANGES
      </Text>
    </View>
  );
};

export default Unmounting;

const styles = StyleSheet.create({
  edit: {
    color: "red",
  },
});
