import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";

const BannerSaldo = ({ componentId }) => {
  useDeviceContext(tw);

  return (
    <ImageBackground
      style={tw`w-full`}
      source={require("../../assets/images/bluee.png")}
    >
      <View style={tw`flex-col items-center justify-center w-full h-36 mt-12`}>
        <Text>Saldo yang dapat ditarik</Text>
        <Text style={tw`my-2 text-4xl font-black`}>Rp 2.000.000</Text>
        <Pressable style={tw`bg-white/10 rounded-full`}>
          <Text style={tw`text-white font-bold px-8 py-1`}>Tarik Saldo</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default BannerSaldo;
