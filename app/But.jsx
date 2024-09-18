import { View, Text, Button } from "react-native";
import React from "react";

// button and on press event....
const but = () => {
  console.warn("hey it's working");
};

//  insert any value to print our data or message....
const b2 = (aa) => {
  console.warn(aa);
};

// in 'console.warn' the values are not stored it's not a variable to store something....
const insert_data = 10;
// console.warn(insert_data);
// how this value '10' is print without console.log as a warning on screen

// it once display when we rum or reload the whole page.....
console.warn("20");

// className and style .......
const Buttonn = () => {
  return (
    <>
      {/* without passing data or parameter */}
      <Button title="click here" onPress={but} color={"green"} />

      {/* passing data or parameter */}
      <Button
        title=" passing any value "
        onPress={() => b2("congratulations")}
        color={"#001D3F"}
      />

      {/* passing data or parameter */}
      <Button title="data" onPress={() => b2(insert_data)} color={"black"} />
    </>
  );
};

export default Buttonn;
