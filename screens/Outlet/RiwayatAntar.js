import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import DataRiwayatAntar from "../../component/partnerProfile/DataRiwayatAntar";
import { BackHandlerRiwayatAntar } from "../../component/partnerProfile/BackHandler";
const RiwayatAntar = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full`}>
      <DataRiwayatAntar componentId={componentId} />
      <BackHandlerRiwayatAntar componentId={componentId} />
    </View>
  );
};

RiwayatAntar.options = {
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

export default RiwayatAntar;
