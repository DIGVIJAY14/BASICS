import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

const UseEffecthook_2 = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(100);
  const [count3, setcount3] = useState(200);
  useEffect(() => {
    // console.warn("hey!!");
  }, [count1, count3]);
  // useEffect(() => {
  //   console.warn("how are you");
  // }, [count2]);
  //   for mounting (execution time call only..) []
  // if we not use this mounting then it updates and display all
  return (
    <View>
      <Text className="text-xl ml-[50] font-extrabold mt-[10] underline ">
        UseEffecthook :- {count1} :: {count2} :: {count3}
      </Text>
      <Button title="changes_1" onPress={() => setcount1(count1 + 1)} />
      <Button title="changes_2" onPress={() => setcount2(count2 + 1)} />
      <Button title="changes_3" onPress={() => setcount3(count3 + 1)} />
      <Prop info={{ count2, count3, count1 }} />
    </View>
  );
};

const Prop = (useprop) => {
  // console.warn(useprop.info);
  // console.warn(useprop.info.count2);
  useEffect(() => {
    // console.warn("hey!! count 3 is working");
  }, [useprop.info.count3]);
  return (
    <View>
      <Text className="text-xl ml-[10] font-extrabold mt-[5]">
        Count 1 :: {useprop.info.count1}
      </Text>
      <Text className="text-xl ml-[10] font-extrabold mt-[5]">
        Count 2 :: {useprop.info.count2}
      </Text>
      <Text className="text-xl ml-[10] font-extrabold mt-[5]">
        Count 3 :: {useprop.info.count3}
      </Text>
    </View>
  );
};

export default UseEffecthook_2;
