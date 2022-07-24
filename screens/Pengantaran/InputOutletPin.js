import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PushRoute, BackRoute } from "../../lib/ctx";
import { GlobalContext } from "../../lib/ctx";
const InputOutletPin = ({ componentId }) => {
  useDeviceContext(tw);

  const { setOrderProgress } = React.useContext(GlobalContext);

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  const nextProcess = React.useCallback(() => {
    BackRoute(componentId);
    setOrderProgress(2);
  });

  return (
    <View style={tw`h-full w-full flex-col items-center justify-center`}>
      <View style={tw`my-8`}>
        <Text style={tw`text-gray-800 text-xl text-center font-bold`}>
          Pin Outlet
        </Text>
        <Text style={tw`text-gray-800 text-xl text-center`}>
          Masukan pin yang bisa diperoleh dari outlet.
        </Text>
      </View>
      <View style={tw`flex-row items-center`}>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl ml-4`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl mx-4`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl`}
          keyboardType={`number-pad`}
        ></TextInput>
      </View>
      <View style={tw`w-full flex-row items-center my-8 px-4`}>
        <Pressable
          onPress={back}
          style={[
            { flex: 1 },
            tw`bg-dgray w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
          ]}
        >
          <Text style={tw`text-dblue text-sm font-bold`}>Kembali</Text>
        </Pressable>
        <View style={tw`w-2`} />
        <Pressable
          onPress={nextProcess}
          style={[
            { flex: 1 },
            tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
          ]}
        >
          <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
        </Pressable>
      </View>
    </View>
  );
};

InputOutletPin.options = {
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

export default InputOutletPin;
