import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  Market,
  InputPinProgress,
  Cooking,
  CookingProgress,
} from "../../../lib/listSvg";
import OrderProsesHeader from "../OrderProsesHeader";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";

const HomeProses = ({}) => {
  useDeviceContext(tw);
  return (
    <View style={tw`flex-col items-center justify-center w-full h-full`}>
      <Cooking />
      <CookingProgress />
      <Text style={tw`text-gray-800 p-8 text-center`}>
        Makanan sedang diproses, kalo udah diambil klik “Pick Up” di bawah ini
        ya.
      </Text>
      <View style={tw`absolute top-0 w-full`}>
        <OrderProsesHeader />
      </View>
    </View>
  );
};

export default HomeProses;
