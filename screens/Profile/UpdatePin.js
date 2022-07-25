import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { ForgotPin } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
import { BackHandlerUpdatePin } from "../../component/profile/BackHandler";
const UpdatePin = ({ componentId }) => {
  const goToResetPin = React.useCallback(() => {
    PushRoute(componentId, "OtpResetPin");
  });
  return (
    <View style={tw`w-full h-full pt-10 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`pb-32`}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Pin Lama</Text>
          <TextInput
            placeholder="Pin Lama"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
          <Pressable
            style={tw`my-2 items-end justify-center`}
            onPress={goToResetPin}
          >
            <ForgotPin />
          </Pressable>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Pin Baru</Text>
          <Text style={tw`text-gray-300  text-sm`}>Pin 6 digit angka.</Text>
          <TextInput
            placeholder="Pin Baru"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
          <Text style={tw`text-gray-800 font-bold text-sm`}>Ulangi Pin</Text>
          <TextInput
            placeholder="Ulangi Pin"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
        </View>
      </ScrollView>
      <BackHandlerUpdatePin componentId={componentId} />
    </View>
  );
};

UpdatePin.options = {
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

export default UpdatePin;
