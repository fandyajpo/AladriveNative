import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import HeaderRiwayat from "../../component/riwayat/HeaderRiwayat";
import DetailRiwayat from "../../component/riwayat/DetailRiwayat";
import { BackHandlerDetailRiwayat } from "../../component/riwayat/BackHandler";
const RiwayatDetail = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full bg-white`}>
      <DetailRiwayat />
      <View style={tw`absolute top-0 w-full`}>
        <HeaderRiwayat />
      </View>
      <BackHandlerDetailRiwayat componentId={componentId} />
    </View>
  );
};

export default RiwayatDetail;

RiwayatDetail.options = {
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
