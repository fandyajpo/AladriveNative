import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import ListPersetujuan from "../../component/outlet/ListPersetujuan";
import { BackHandlerMenungguPersetujuan } from "../../component/outlet/BackHandler";
const MenungguPersetujuan = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full`}>
      <ListPersetujuan componentId={componentId} />
      <BackHandlerMenungguPersetujuan componentId={componentId} />
    </View>
  );
};

MenungguPersetujuan.options = {
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

export default MenungguPersetujuan;
