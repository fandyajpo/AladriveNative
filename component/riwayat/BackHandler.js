import React from "react";
import tw from "../../lib/tailwind";
import { View, Pressable, Text } from "react-native";
import { Back } from "../../lib/listSvg";
import { BackRoute } from "../../lib/ctx";

export const BackHandlerRiwayatSearch = ({ componentId }) => {
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-mgray p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full mb-4`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Riwayat
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export const BackHandlerDetailRiwayat = ({ componentId }) => {
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);
  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-mgray p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full mb-4`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Detail
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};
