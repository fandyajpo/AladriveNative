import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { BackRoute } from "../../lib/ctx";
import { BackHandlerPilihBank } from "../../component/profile/BackHandler";
import { BCA, BRI, BTN } from "../../lib/listSvg";
const PilihBank = ({ componentId }) => {
  useDeviceContext(tw);

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`w-full h-full pt-13`}>
      <ScrollView style={tw`bg-white w-full`}>
        <Pressable
          style={tw`border-b p-4 border-gray-300 flex-row items-center`}
          onPress={back}
        >
          <BCA />
          <Text style={tw`text-gray-800 font-bold ml-2`}>
            Bank Central Asia
          </Text>
        </Pressable>
        <Pressable
          style={tw`border-b p-4 border-gray-300 flex-row items-center`}
          onPress={back}
        >
          <BRI />
          <Text style={tw`text-gray-800 font-bold ml-2`}>
            Bank Rakyat Indonesia
          </Text>
        </Pressable>
        <Pressable
          style={tw`border-b p-4 border-gray-300 flex-row items-center`}
          onPress={back}
        >
          <BTN />
          <Text style={tw`text-gray-800 font-bold ml-2`}>Bank T N</Text>
        </Pressable>
      </ScrollView>
      <BackHandlerPilihBank componentId={componentId} />
    </View>
  );
};

PilihBank.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default PilihBank;
