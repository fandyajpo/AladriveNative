import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { ForgotPin } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { BackHandlerTarikSaldo } from "../../component/profile/BackHandler";
const TarikSaldo = ({ componentId }) => {
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`w-full h-full pt-10 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`pb-32`}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-base`}>
            Penarikan (Rp)
          </Text>

          <Text style={tw`text-gray-300 font-bold text-sm`}>
            Minimal penarikan Rp25.000
          </Text>
          <Text style={tw`text-gray-300 font-bold text-sm`}>
            Maksimal penarikan Rp2.000.000
          </Text>

          <Text style={tw`text-gray-800 font-bold text-sm`}>
            Rekening penarikan
          </Text>
          <Text style={tw`text-gray-800 text-sm`}>Bank Central Asia</Text>
          <Text style={tw`text-gray-800 text-sm`}>
            Haris Dimas - 1425152718
          </Text>
          <TextInput
            placeholder="Rp 0"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
        </View>
      </ScrollView>
      <BackHandlerTarikSaldo componentId={componentId} action={back} />
    </View>
  );
};

TarikSaldo.options = {
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

export default TarikSaldo;
