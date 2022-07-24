import React from "react";
import { View, ScrollView } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { BackHandlerSaldo } from "../../../component/profile/BackHandler";
import BannerSaldo from "../../../component/profile/BannerSaldo";
import RekeningPenarikan from "../../../component/profile/RekeningPenarikan";

const Saldo = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-white w-full h-full`}>
      <View style={tw`absolute w-full`}>
        <BannerSaldo />
      </View>
      <ScrollView contentContainerStyle={tw`pt-50 px-2`}>
        <View>
          <RekeningPenarikan componentId={componentId} />
        </View>
      </ScrollView>
      <BackHandlerSaldo componentId={componentId} />
    </View>
  );
};

Saldo.options = {
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
    style: "light",
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

export default Saldo;
