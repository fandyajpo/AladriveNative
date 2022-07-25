import React from "react";
import { View, Text } from "react-native";
import { Sampai, SampaiProgress } from "../../../lib/listSvg";
import OrderProsesHeader from "../OrderProsesHeader";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";

const HomeSampai = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`flex-col items-center justify-center w-full h-full`}>
      <Sampai />
      <SampaiProgress />
      <Text style={tw`text-gray-800 p-8 text-center`}>
        Kamu udah sampai. Kalo pesanan udah ketangan customer, tekan tombol
        selesai ya.
      </Text>
      <View style={tw`absolute top-0 w-full`}>
        <OrderProsesHeader />
      </View>
    </View>
  );
};

export default React.memo(HomeSampai);
