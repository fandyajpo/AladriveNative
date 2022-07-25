import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import tw from "../../lib/tailwind";
import { ProsesVerif, InfoIcon } from "../../lib/listSvg";
import { BackHandlerProsesVerif } from "../../component/profile/BackHandler";

const Alerts = () => {
  return (
    <View
      style={tw`flex-row border items-center rounded-xl border-gray-300 p-2`}
    >
      <InfoIcon />
      <Text style={tw`text-gray-800 pl-2 text-sm w-11/12`}>
        Pergantian rekening membutuhkan proses verifikasi setidaknya 24 jam.
      </Text>
    </View>
  );
};

const ProsesVerifScreen = ({ componentId }) => {
  return (
    <View
      style={tw`w-full flex-col items-center justify-center h-full bg-white`}
    >
      <View style={tw`absolute top-0 my-8 p-4`}>
        <Alerts />
      </View>
      <View>
        <ProsesVerif />
        <Text
          style={tw`text-gray-800 font-bold text-center text-sm sm:text-base`}
        >
          Proses Verifikasi
        </Text>
        <Text style={tw`text-gray-800 text-center text-sm sm:text-base`}>
          Datamu lagi diproses verifikasi, tunggu yaa
        </Text>
      </View>
      <BackHandlerProsesVerif componentId={componentId} />
    </View>
  );
};

ProsesVerifScreen.options = {
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

export default ProsesVerifScreen;
