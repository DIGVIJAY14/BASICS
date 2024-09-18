import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const Textinput = () => {
  const [name, updatename] = useState("");
  return (
    <View className="h-[130] w-full  bg-red-300">
      <Text className="text-2xl padding left-[128]">Text Input</Text>
      <Text className="text-2xl padding left-[10]">Name :- "{name}"</Text>
      <TextInput
        style={Styles.edit}
        placeholder="Enter your name"
        value={name}
        onChangeText={(anyvalue) => updatename(anyvalue)}
        // to clear the data we have to blank the both name and updatename
      />
      <Button title="Clear data" onPress={() => updatename("")} />
    </View>
  );
};

export default Textinput;

const Styles = StyleSheet.create({
  edit: {
    borderColor: "#781730",
    borderWidth: 4,
    width: 200,
    paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 2,
  },
});
