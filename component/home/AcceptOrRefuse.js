import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";

import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";

import { GlobalContext } from "../../lib/ctx";

const AcceptOrRefuse = ({ componentId, setTerimaOrder }) => {
  useDeviceContext(tw);

  const {
    online,
    setOnline,
    adaOrder,
    setAdaOrder,
    orderProgress,
    setOrderProgress,
  } = React.useContext(GlobalContext);

  const showSheet = React.useCallback(() => {
    SheetManager.show("refuseOrder");
  }, []);

  const accept = React.useCallback(() => {
    setOrderProgress(1);
  });

  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={showSheet}
        style={[
          { flex: 1 },
          tw`bg-dgray w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-red-500 text-sm font-bold`}>Tolak</Text>
      </Pressable>
      <View style={tw`w-2`} />
      <Pressable
        onPress={accept}
        style={[
          { flex: 1 },
          tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-white text-sm font-bold`}>Terima</Text>
      </Pressable>
    </View>
  );
};

export default AcceptOrRefuse;
