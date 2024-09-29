import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const Toggle = () => {
  const [ok, okset] = useState(false);
  return (
    <View className="h-[220] bg-amber-300 pt-[5]  ">
      <Text className="text-xl ml-[150] font-extrabold pb-[5] ">Toggle</Text>
      {/* SET I */}
      <View className="m-[5]">
        <Button title="SHOW" onPress={() => okset(true)} />
      </View>
      <View className="m-[5]">
        <Button title="HIDE" onPress={() => okset(false)} />
      </View>
      {/* SET II */}
      <View className="m-[5]">
        <Button title="TOGGLE" onPress={() => okset(!ok)} />
      </View>
      {ok ? <Check /> : null}
    </View>
  );
};

const Check = () => {
  return (
    <View className="items-center">
      <Text style={styles.edit} className="text-xl font-bold mt-[15] underline">
        SHOW AND HIDE
      </Text>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  edit: {
    color: "red",
  },
});
