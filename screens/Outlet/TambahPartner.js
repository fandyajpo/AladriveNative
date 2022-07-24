import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import Header from "../../component/outlet/Header";
import ListOutlet from "../../component/outlet/ListOutlet";
import { BackHandlerTambahPartner } from "../../component/outlet/BackHandler";
const TambahPartner = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-white w-full h-full`}>
      <ListOutlet componentId={componentId} />
      <View style={tw`absolute top-0`}>
        <Header />
      </View>
      <BackHandlerTambahPartner componentId={componentId} />
    </View>
  );
};

TambahPartner.options = {
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

export default TambahPartner;
