import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [disp, setdisp] = useState(false);
  const [hiddenoption, sethiddenoption] = useState(true);

  const empty = () => {
    setdisp(false), setname(), setemail(), setpassword();
  };
  return (
    <>
      <View className=" h-[360] w-full bg-violet-400">
        <Text
          className="text-3xl font-extrabold underline ml-[140] "
          style={styles.edit}
        >
          FORM
        </Text>
        <Text
          className="text-l font-extrabold ml-[10] mt-[15]"
          style={styles.edit}
        >
          Name :
        </Text>
        <TextInput
          style={styles.edits}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setname(text);
          }}
        />
        <Text className="text-l font-extrabold ml-[10]" style={styles.edit}>
          E-mail :
        </Text>
        <TextInput
          style={styles.edits}
          placeholder="Enter your e-mail"
          value={email}
          onChangeText={(text) => {
            setemail(text);
          }}
        />
        <Text className="text-l font-extrabold ml-[10]" style={styles.edit}>
          Password :
        </Text>
        <TextInput
          style={styles.edits}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => {
            setpassword(text);
          }}
          secureTextEntry={hiddenoption}
        />
        <View className="w-[32] h-[30] ml-[178] mt-[-45]">
          <Button
            title="👀"
            color="black"
            onPress={
              hiddenoption
                ? () => sethiddenoption(false)
                : () => sethiddenoption(true)
            }
          />
        </View>
        <View className="mb-[8] mt-[15] ">
          <Button
            title="Print details"
            color={"purple"}
            onPress={() => setdisp(true)}
          />
        </View>
        <Button title="Clear details" color={"#073477"} onPress={empty} />
        <View>
          {/* if-else condition */}
          {disp ? (
            <View className="m-[8]">
              <Text style={styles.emptyy} className="font-extrabold">
                Name : {name} {"\n"}
                E-mail : {email} {"\n"}
                Password : {password}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  edit: {
    color: "#073477",
  },

  edits: {
    height: 40,
    width: 200,
    borderWidth: 3,
    borderColor: "#073477",
    marginRight: 120,
    marginTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: 15,
  },

  emptyy: {
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 5,
    color: "purple",
  },
});
