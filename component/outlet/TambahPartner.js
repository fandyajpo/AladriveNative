import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PushRoute } from "../../lib/ctx";
const TambahPartner = ({ componentId }) => {
  useDeviceContext(tw);

  const goToTambahPartner = React.useCallback(() => {
    PushRoute(componentId, "TambahPartner");
  }, []);

  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={goToTambahPartner}
        style={tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`}
      >
        <Text style={tw`text-white text-sm font-bold`}>Gabung Sekarang</Text>
      </Pressable>
    </View>
  );
};

export default TambahPartner;
