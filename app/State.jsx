import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const State = () => {
  const [neww, setnew] = useState("Hey!!!");
  // here we use 'let' coz const will not be able to call again anywhere
  let varr = "not updated";

  function changes() {
    setnew("it's working");
    varr = "not be able to rerender";
  }

  return (
    <View className="h-[100] bg-red-800">
      {/* with usestate */}
      <Text className="font-extrabold text-3xl">{neww}</Text>
      {/* with variable ----- doesn't rerender or not updates once it's assigned */}
      <Text className="font-extrabold text-3xl">{varr}</Text>
      <Button title="update" onPress={changes} />
    </View>
  );
};

export default State;
