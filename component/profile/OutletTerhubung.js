import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { OutletTerhubung, PengantaranMingguIni } from "../../lib/listSvg";

const OutletTerhubungPage = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`flex-row items-center`}>
      <Pressable
        style={[
          { flex: 1 },
          tw`bg-dgray rounded-xl w-full h-24 mr-1 flex items-center justify-center`,
        ]}
      >
        <View style={tw`flex-col items-center`}>
          <View style={tw`flex-row items-center`}>
            <OutletTerhubung />
            <Text style={tw`text-gray-800 font-bold text-sm ml-1`}>5</Text>
          </View>
          <Text style={tw`text-gray-800 `}>Outlet Terhubung</Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          { flex: 1 },
          tw`bg-dgray rounded-xl w-full h-24 ml-1 flex items-center justify-center`,
        ]}
      >
        <View style={tw`flex-col items-center`}>
          <View style={tw`flex-row items-center`}>
            <PengantaranMingguIni />
            <Text style={tw`text-gray-800 font-bold text-sm ml-1`}>5</Text>
          </View>
          <Text style={tw`text-gray-800 `}>Pengantaran Minggu Ini</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OutletTerhubungPage;
