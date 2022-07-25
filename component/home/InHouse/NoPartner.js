import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { OfflineEmptyState } from "../../../lib/listSvg";
const OfflineMode = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full flex items-center justify-center`}>
      <OfflineEmptyState />
      <View style={tw`py-2`}>
        <Text
          style={tw`text-gray-800 font-bold text-center text-sm sm:text-base`}
        >
          Saat ini kamu lagi offline
        </Text>
        <Text style={tw`text-gray-800 text-center text-sm sm:text-base`}>
          Kamu bisa nerima pesanan ketika statusmu online. Yuk online!
        </Text>
      </View>
    </View>
  );
};

export default React.memo(OfflineMode);
