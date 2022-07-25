import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { GlobalContext } from "../../lib/ctx";

const Selesai = () => {
  useDeviceContext(tw);

  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);

  const nextProcess = React.useCallback(() => {
    setOrderProgress(orderProgress + 1);
  });

  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={nextProcess}
        style={[
          { flex: 1 },
          tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-white text-sm font-bold`}>Selesai</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Selesai);
