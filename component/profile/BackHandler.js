import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute } from "../../lib/ctx";

export const BackHandlerSaldo = React.memo(({ componentId }) => {
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-1/4`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-auto h-8 flex items-center justify-center`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Saldo
          </Text>
        </View>
        <View style={tw`w-1/4`} />
      </View>
    </View>
  );
});

export const BackHandlerRiwayatPenarikan = React.memo(({ componentId }) => {
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-1/4`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-auto h-8 flex items-center justify-center`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Riwayat Penarikan
          </Text>
        </View>
        <View style={tw`w-1/4`} />
      </View>
    </View>
  );
});
