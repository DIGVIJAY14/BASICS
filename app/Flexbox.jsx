// Responsive UI
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const Flexbox = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <View className="bg-orange-400 flex-1 mt-[30]">
        <View
          style={{
            flex: 3,
            backgroundColor: "blue",
            flexDirection: "column-reverse",
            borderColor: "black",
            borderWidth: 10,
          }}
        >
          <View style={{ flex: 1, backgroundColor: "cyan", margin: 5 }}></View>
          <View style={{ flex: 1, backgroundColor: "green", margin: 5 }}></View>
          <View style={{ flex: 1, backgroundColor: "pink", margin: 5 }}></View>
          <View
            style={{
              flex: 1,
              backgroundColor: "orange",
              margin: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{ flex: 3, backgroundColor: "gray", margin: 5 }}
            ></View>
            <View style={{ flex: 3, backgroundColor: "red", margin: 5 }}></View>
            <View
              style={{ flex: 3, backgroundColor: "black", margin: 5 }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: 10,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, backgroundColor: "gray", margin: 5 }}></View>
          <View
            style={{
              flex: 2,
              backgroundColor: "green",
              margin: 5,
              flexDirection: "column",
            }}
          >
            <View
              style={{ flex: 1, backgroundColor: "pink", margin: 5 }}
            ></View>
            <View
              style={{ flex: 1, backgroundColor: "cyan", margin: 5 }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "yellow",
            borderColor: "black",
            borderWidth: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "cyan",
              margin: 5,
              flexDirection: "row-reverse",
            }}
          >
            <View
              style={{ flex: 1, backgroundColor: "black", margin: 5 }}
            ></View>
            <View
              style={{ flex: 1, backgroundColor: "blue", margin: 5 }}
            ></View>
            <View style={{ flex: 1, backgroundColor: "red", margin: 5 }}></View>
            <View
              style={{ flex: 1, backgroundColor: "olive", margin: 5 }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "orange",
              margin: 5,
              flexDirection: "column-reverse",
            }}
          >
            <View
              style={{ flex: 1, backgroundColor: "black", margin: 5 }}
            ></View>
            <View
              style={{ flex: 1, backgroundColor: "blue", margin: 5 }}
            ></View>
            <View style={{ flex: 1, backgroundColor: "red", margin: 5 }}></View>
            <View
              style={{ flex: 1, backgroundColor: "olive", margin: 5 }}
            ></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Flexbox;
