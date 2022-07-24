import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";

const Header = () => {
  useDeviceContext(tw);
  return (
    <View
      style={tw`bg-mgray/90 w-full h-36 sm:h-44 px-2 pt-12 pb-4 flex-row sm:flex-col items-center`}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-black w-16 h-16 rounded-full`} />
      </View>

      <View
        style={[{ flex: 1 }, tw`flex-row items-center  justify-between ml-2`]}
      >
        <View style={tw`sm:flex-col sm:items-center`}>
          <Text style={tw`text-gray-800 text-xl font-bold`}>Good Method</Text>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-gray-800 font-bold text-base`}>80</Text>
            <Text style={tw`text-gray-300 font-bold text-sm ml-2`}>
              Pengantaran/Minggu
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
