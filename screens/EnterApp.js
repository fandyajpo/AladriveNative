import React from "react";
import SplashScreen from "react-native-splash-screen";
import tw from "../lib/tailwind";
import { Navigation } from "react-native-navigation";
import { View, Text, StyleSheet, Pressable, BackHandler } from "react-native";
import { Motor, AlaDrive } from "../lib/listSvg";
import { PushRoute } from "../lib/ctx";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Enter = ({ componentId }) => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  BackHandler.addEventListener("hardwareBackPress", function () {
    if (componentId) {
      BackHandler.exitApp();
      return true;
    }
    return false;
  });

  return (
    <View style={styles.root}>
      <View style={tw`absolute top-0 left-0`}>
        <AlaDrive />
      </View>
      <View style={tw`absolute right-0`}>
        <Motor />
      </View>
      <View style={tw`w-full px-4 flex-col absolute bottom-10`}>
        <View style={tw`pb-8 mb-6`}>
          <Text style={tw`text-gray-800 text-center text-xl font-bold`}>
            Selamat Datang!
          </Text>
          <Text style={tw`text-gray-800 text-center`}>
            Bergabung jadi Outlet di aplikasi masa depan
          </Text>
        </View>

        <Pressable
          style={tw`bg-dblue w-full h-10 sm:h-12 rounded-full my-2 flex items-center justify-center`}
          onPress={() => PushRoute(componentId, "Login")}
        >
          <Text style={tw`font-bold `}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => PushRoute(componentId, "DaftarOutlet")}
          style={tw`bg-dgray w-full h-10 sm:h-12 rounded-full my-2 flex items-center justify-center`}
        >
          <Text style={tw`font-bold text-dblue`}>Daftar</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Enter;

Enter.options = {
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whiter",
  },
});
