import React from "react";
import { View, Text } from "react-native";
import { Done, DoneProgress } from "../../../lib/listSvg";
import OrderProsesHeader from "../OrderProsesHeader";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";

const HomeDone = ({}) => {
  useDeviceContext(tw);
  return (
    <View style={tw`flex-col items-center justify-center w-full h-full`}>
      <Done />
      <DoneProgress />
      <Text style={tw`text-gray-800 p-8 text-center`}>
        Hati-hati, kalo udah sampe, tekan tombol "sampai" ya. biar kamu gak lama
        nunggu.
      </Text>
      <View style={tw`absolute top-0 w-full`}>
        <OrderProsesHeader />
      </View>
    </View>
  );
};

export default HomeDone;
