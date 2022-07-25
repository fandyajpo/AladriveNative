import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { GlobalContext } from "../../lib/ctx";
const ServiceDone = ({ componentId, setTerimaOrder }) => {
  useDeviceContext(tw);
  const { setOrderProgress } = React.useContext(GlobalContext);

  const endProcess = React.useCallback(() => {
    setOrderProgress(0);
  });
  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={endProcess}
        style={[
          { flex: 1 },
          tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(ServiceDone);
