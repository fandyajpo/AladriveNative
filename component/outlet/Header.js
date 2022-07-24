import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { Locs } from "../../lib/listSvg";
const Header = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-mgray w-full h-26 px-2 pt-8 flex-row items-center`}>
      <View style={tw`flex-row items-center`}>
        <Locs />
      </View>
      <View style={tw`flex-row items-center w-full justify-between ml-2`}>
        <View style={tw`flex-row`}>
          <View>
            <Text style={tw`text-gray-800 text-xs`}>Lokasimu</Text>
            <Text style={tw`text-gray-800 font-bold text-base`}>
              Jl. Neutro rowboyo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
