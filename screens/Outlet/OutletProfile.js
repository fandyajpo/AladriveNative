import React from "react";
import { View, ScrollView } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import Header from "../../component/partnerProfile/outlet/Header";
import Rating from "../../component/partnerProfile/outlet/Rating";
import Detail from "../../component/partnerProfile/outlet/Detail";
import { BackHandlerPermintaanBergabung } from "../../component/partnerProfile/BackHandler";

const OutletProfile = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-white w-full h-full`}>
      <View style={tw`absolute top-0 z-10 w-full`}>
        <Header />
      </View>
      <View style={tw`p-2 absolute w-full top-36 sm:top-44 z-10`}>
        <Rating componentId={componentId} />
      </View>
      <ScrollView contentContainerStyle={tw`pt-54 sm:pt-62 pb-28 sm:pb-32 `}>
        <Detail />
      </ScrollView>
      <BackHandlerPermintaanBergabung componentId={componentId} />
    </View>
  );
};

OutletProfile.options = {
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

export default OutletProfile;
