import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";

import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";

const Sampai = ({ componentId, setTerimaOrder }) => {
  useDeviceContext(tw);

  const showSheet = React.useCallback(() => {
    SheetManager.show("refuseOrder");
  }, []);

  const accept = React.useCallback(() => {
    setTerimaOrder(1);
  });

  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={accept}
        style={[
          { flex: 1 },
          tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-white text-sm font-bold`}>Sampai</Text>
      </Pressable>
    </View>
  );
};

export default Sampai;
