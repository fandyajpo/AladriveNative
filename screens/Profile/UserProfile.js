import React from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";

const UserProfile = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <View></View>;
};

export default UserProfile;
