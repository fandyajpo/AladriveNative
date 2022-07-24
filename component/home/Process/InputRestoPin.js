import React from "react";
import { View, Text, Pressable } from "react-native";
import { Market, InputPinProgress } from "../../../lib/listSvg";
import OrderProsesHeader from "../OrderProsesHeader";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { GlobalContext } from "../../../lib/ctx";
const InputRestoPin = ({ prosesRef }) => {
  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);

  useDeviceContext(tw);
  return (
    <View style={tw`flex-col items-center justify-center w-full h-full`}>
      <Market />
      <InputPinProgress />
      <Text style={tw`text-gray-800 p-8 text-center`}>
        Silahkan input pin dari outlet untuk konfirmasi bahwa kamu sudah sampai
        di outlet.
      </Text>
      <View style={tw`absolute top-0 w-full`}>
        <OrderProsesHeader />
      </View>
    </View>
  );
};

export default InputRestoPin;
