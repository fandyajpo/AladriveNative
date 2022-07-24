import React from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import tw from "../../../lib/tailwind";
import OnlineStatus from "../../../component/onlineStatus";
import OfflineMode from "../../../component/home/InHouse/OfflineMode";
import { useDeviceContext } from "twrnc";
const Pengantaran = () => {
  useDeviceContext(tw);
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={tw`bg-blue-500 w-full h-full`}>
      <View style={tw`absolute top-0 w-full`}>
        <OnlineStatus title={"Pengantaran"} />
      </View>
      <OfflineMode />
    </View>
  );
};

export default Pengantaran;
