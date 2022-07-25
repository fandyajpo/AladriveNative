import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Chat, Call } from "../../lib/listSvg";
import { useDeviceContext } from "twrnc";
const OrderProsesHeader = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-mgray w-full h-26 px-2 pt-8 flex-row items-center`}>
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
        <View style={tw`border-b-2 w-1 border-gray-400`} />
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
      </View>

      <View
        style={[
          { flex: 1 },
          tw`flex-row items-center w-full justify-between ml-4`,
        ]}
      >
        <View style={tw`flex-row`}>
          <View>
            <Text style={tw`text-gray-800 text-xs`}>Jarak</Text>
            <Text style={tw`text-gray-800 font-bold text-base`}>3 Km</Text>
          </View>
          <View style={tw`ml-4`}>
            <Text style={tw`text-gray-800 text-xs`}>Status</Text>
            <Text style={tw`text-gray-800 font-bold text-base`}>Selesai</Text>
          </View>
        </View>
        <View style={tw`flex-row items-center`}>
          <Pressable>
            <Call />
          </Pressable>
          <View style={tw`w-2`} />
          <Pressable>
            <Chat />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default React.memo(OrderProsesHeader);
