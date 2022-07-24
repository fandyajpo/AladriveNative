import React from "react";
import { View, ScrollView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import OnlineStatus from "../../../component/onlineStatus";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";

import User from "../../../component/profile/User";
import Saldo from "../../../component/profile/Saldo";
import OutletTerhubung from "../../../component/profile/OutletTerhubung";
import { ChangePhotoProfile } from "../../../component/profile/BottomSheet";

const UserProfile = ({ componentId }) => {
  useDeviceContext(tw);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`absolute top-0 w-full`}>
        <OnlineStatus title={"Profile"} />
      </View>
      <ScrollView contentContainerStyle={tw`pt-28 px-2`}>
        <User />
        <View style={tw`py-2`}>
          <Saldo componentId={componentId} />
        </View>
        <OutletTerhubung />
      </ScrollView>
      <ChangePhotoProfile id={"changePhotoProfile"} />
    </View>
  );
};

export default UserProfile;
