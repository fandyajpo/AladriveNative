import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { Star, RightDropdown } from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";

const Rating = ({ componentId }) => {
  useDeviceContext(tw);

  const goToRiwayatAntar = React.useCallback(() => {
    PushRoute(componentId, "RiwayatAntar");
  });

  return (
    <View
      style={tw`bg-white border-gray-300 border w-full h-14 rounded-xl flex-row items-center pl-3 sm:pl-4 shadow-sm`}
    >
      <View style={tw`flex-col items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-sm font-bold text-gray-800`}>4.5</Text>
          <Star />
        </View>
        <Text style={tw`text-gray-300`}>Rating</Text>
      </View>
      <View style={tw`border-l border-gray-300 h-8 mx-3 sm:mx-4`} />
      <View style={tw`flex-col items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-sm font-bold text-gray-800`}>2-5Km</Text>
        </View>
        <Text style={tw`text-gray-300`}>Jarak</Text>
      </View>
      <View style={tw`border-l border-gray-300 h-8 mx-3 sm:mx-4`} />
      <View style={tw`flex-col items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-sm font-bold text-gray-800`}>8.000/Km</Text>
        </View>
        <Text style={tw`text-gray-300`}>Sharing</Text>
      </View>
      <View style={tw`border-l border-gray-300 h-8 mx-3 sm:mx-4`} />
      <Pressable
        onPress={goToRiwayatAntar}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          tw`flex-row items-center`,
        ]}
      >
        <View style={tw`flex-col items-center mr-2`}>
          <Text style={tw`text-dblue`}>Riwayat</Text>
          <Text style={tw`text-dblue`}>Antarmu</Text>
        </View>
        <RightDropdown />
      </Pressable>
    </View>
  );
};

export default Rating;
