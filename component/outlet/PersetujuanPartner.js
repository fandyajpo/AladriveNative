import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PushRoute } from "../../lib/ctx";
const PersetujuanPartner = ({ componentId }) => {
  useDeviceContext(tw);

  const goToPersetujuanList = React.useCallback(() => {
    PushRoute(componentId, "MenungguPersetujuan");
  }, []);

  return (
    <Pressable
      onPress={goToPersetujuanList}
      style={tw`bg-white border border-gray-300 rounded-xl w-full h-auto`}
    >
      <View style={tw`w-full h-auto flex-row items-center justify-between p-2`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          Menunggu Persetujuan
        </Text>
        <View
          style={tw`bg-dblue rounded-full px-1 flex-row items-center justify-center`}
        >
          <Text style={tw`p-1 font-bold`}>2</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PersetujuanPartner;
