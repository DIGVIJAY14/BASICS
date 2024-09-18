import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

// let passingname = "anyy"

const Props = () => {
  const [name, setname] = useState("DV");

  return (
    <View>
      <Button title="update" onPress={() => setname("CR")} />
      {/*here, details is like prop, not be able to paas the state directly in other component , we need prop for it */}
      <User details={name} age={25} />
      {/* passing variable */}
      {/* <User details={passingname} age={25} />    */}
    </View>
  );
};

// transfer data from one component to other (parent to child)
const User = (para) => {
  return (
    <View className="h-[70] w-full bg-orange-600">
      <Text className="text-3xl font-extrabold">Detailsss: {para.details}</Text>
      <Text className="text-3xl font-extrabold">Age_Detail: {para.age}</Text>
    </View>
  );
};

export default Props;

// passing variables  , using state and prop , calling other components using props {----} , {---- . -----}
