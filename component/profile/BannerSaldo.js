import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PushRoute } from "../../lib/ctx";

const BannerSaldo = ({ componentId }) => {
  useDeviceContext(tw);

  const goToTarikSaldo = React.useCallback(() => {
    PushRoute(componentId, "TarikSaldo");
  }, []);

  return (
    <View style={tw`flex items-center justify-center`}>
      <ImageBackground
        style={tw`w-full`}
        source={require("../../assets/images/bluee.png")}
      >
        <View
          style={tw`flex-col items-center justify-center w-full h-36 mt-12`}
        >
          <Text>Saldo yang dapat ditarik</Text>
          <Text style={tw`my-2 text-4xl font-black`}>Rp 2.000.000</Text>
        </View>
      </ImageBackground>
      <Pressable
        style={tw`bg-white/20 rounded-full absolute top-38 z-10`}
        onPress={goToTarikSaldo}
      >
        <Text style={tw`text-white font-bold px-8 py-1`}>Tarik Saldo</Text>
      </Pressable>
    </View>
  );
};

export default BannerSaldo;
