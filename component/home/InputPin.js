import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";

import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { PushRoute } from "../../lib/ctx";
import { GlobalContext } from "../../lib/ctx";
const InputPin = ({ componentId, setTerimaOrder }) => {
  useDeviceContext(tw);

  const goToInputPin = React.useCallback(() => {
    SheetManager.show("inputPinOutlet");
  }, []);

  return (
    <View
      style={tw`w-full bg-white p-2 sm:p-4 flex-row justify-around items-center border-b border-t border-gray-300`}
    >
      <Pressable
        onPress={goToInputPin}
        style={[
          { flex: 1 },
          tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
        ]}
      >
        <Text style={tw`text-white text-sm font-bold`}>Input Pin</Text>
      </Pressable>
    </View>
  );
};

export default InputPin;
