import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { OnlineMode } from "../../../lib/listSvg";
const OnlineModes = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full flex items-center justify-center`}>
      <OnlineMode />
      <View style={tw`py-2`}>
        <Text
          style={tw`text-gray-800 font-bold text-center text-sm sm:text-base`}
        >
          Belum ada pengantaran
        </Text>
        <Text style={tw`text-gray-800 text-center text-sm sm:text-base`}>
          Saat ini belum Pengantaran Kamu standby yaaa…
        </Text>
      </View>
    </View>
  );
};

export default OnlineModes;
