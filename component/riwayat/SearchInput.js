import React from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDeviceContext } from "twrnc";
import tw from "../../lib/tailwind";
import { SearchCancelIcon } from "../../lib/listSvg";

const SearchInput = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View
      style={tw`w-full bg-mgray px-4 pt-2 flex-row justify-around items-center`}
    >
      <View style={[{ flex: 1 }, tw`w-full`]}>
        <TextInput
          placeholder="Cari riwayat"
          autoFocus
          style={tw`bg-white border border-gray-300 rounded-full h-8 px-2 sm:h-10`}
        />
        <Pressable style={tw`absolute right-1 top-1 sm:right-2 sm:top-2`}>
          <SearchCancelIcon />
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          tw`flex-row items-center bg-dgray rounded-full py-2 px-4`,
        ]}
      >
        <Text style={tw`text-dblue text-sm font-bold ml-2`}>Search</Text>
      </Pressable>
    </View>
  );
};
export default SearchInput;
