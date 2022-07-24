import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { RightArrowSVG, Wallet } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
const Saldo = ({ componentId }) => {
  useDeviceContext(tw);

  const goToSaldo = React.useCallback(() => PushRoute(componentId, "Saldo"));
  return (
    <Pressable onPress={goToSaldo}>
      <ImageBackground
        style={tw`w-full rounded-xl overflow-hidden`}
        source={require("../../assets/images/bluee.png")}
      >
        <View style={tw`flex-row items-center justify-between p-4`}>
          <View style={tw`flex-row items-center`}>
            <Wallet />
            <View style={tw`ml-2`}>
              <Text style={tw`text-xs text-white`}>Saldo</Text>
              <Text style={tw`text-lg font-bold text-white`}>2.000.000</Text>
            </View>
          </View>
          <RightArrowSVG />
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default Saldo;
