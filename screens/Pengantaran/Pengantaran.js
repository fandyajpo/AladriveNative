import React from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";

const Pengantaran = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <View></View>;
};

export default Pengantaran;
