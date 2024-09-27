import { View, Text, SectionList } from "react-native";

const Sectionlist = () => {
  const users = [
    {
      id: 1,
      detail: "dv",
      data: ["a", "b", "c"],
    },
    {
      id: 1,
      detail: "cr",
      data: ["d", "e", "f"],
    },
    {
      id: 1,
      detail: "dc",
      data: ["g", "h", "i"],
    },
  ];

  return (
    <View className="h-[315] w-full  bg-slate-500">
      <Text className="text-2xl ml-[105] font-extrabold mt-[10] underline ">
        SECTION LIST
      </Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => (
          <Text className="ml-[50] font-extrabold">{item}</Text>
        )}
        renderSectionHeader={({ section: { detail } }) => (
          <Text className="text-3xl font-extrabold text-red-900 pl-[10]">
            {detail}
          </Text>
        )}
      />
    </View>
  );
};

export default Sectionlist;
