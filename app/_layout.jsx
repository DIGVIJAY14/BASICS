import { View, Text, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import But from "./But";
import State from "./State";
import Props from "./Props";
import Styles from "./Styles";
import Textinput from "./Textinput";
import Form from "./Form";
import FlatListt from "./Flatlistt";
import Mapfunction from "./Mapfunction";
import Grid from "./Grid";
import Compinloopflat from "./Compinloopflat";
import Sectionlist from "./Sectionlist";
import UseEffecthook from "./UseEffecthook";
import UseEffecthook_2 from "./UseEffecthook_2"; // already imported in UseEffecthook
import Toggle from "./Toggle";
import Unmounting from "./Unmounting";
import Flexbox from "./Flexbox";

// className and style .......
const _layout = () => {
  return (
    <SafeAreaView className="bg-[#33dbdb] h-full w-full">
      <ScrollView>
        <View className="bg-lime-200">
          <Text style={{ fontSize: 50 }}>_layout</Text>
          <View className="bg-zinc-50 h-[20] w-full"></View>
          {/* import other files..................................*/}
          <But />
          <View className="bg-zinc-50 h-[20] w-full"></View>

          <State />
          <View className="bg-zinc-50 h-[20] w-full"></View>

          {/* ----------------------------------------------------*/}
          <View className="h-[70] w-full bg-indigo-700"></View>

          <Props />
          <View className="bg-zinc-50 h-[20] w-full"></View>
        </View>

        <Styles />
        <View className="bg-zinc-50 h-[20] w-full"></View>
        <Textinput />
        <View className="bg-zinc-50 h-[20] w-full"></View>
        <Form />
        <View className="bg-zinc-50 h-[20] w-full"></View>
        {/* <View className="bg-zinc-50 h-[20] w-full"></View> */}
        {/* <Grid /> */}
        {/* <View className="bg-zinc-50 h-[20] w-full"></View> */}
        {/* <Sectionlist /> */}
        {/* error...................... */}
        <UseEffecthook />
        <View className="bg-zinc-50 h-[20] w-full"></View>
        <Toggle />
        <View className="bg-zinc-50 h-[20] w-full"></View>
        <Unmounting />
        <View className="bg-zinc-50 h-[20] w-full"></View>
      </ScrollView>
      {/* ---------------------------------------------------- */}
      {/* see the difference ************************************/}
      {/* <FlatListt /> */}
      {/* <View className="h-full w-full">
         <Mapfunction />
         </View> */}
      {/* <Compinloopflat /> */}
    </SafeAreaView>
    // <Flexbox />
  );
};

export default _layout;
