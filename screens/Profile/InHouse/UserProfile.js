import React from "react";
import { View, ScrollView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import OnlineStatus from "../../../component/onlineStatus";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import User from "../../../component/profile/User";
import { ChangePhotoProfile } from "../../../component/profile/BottomSheet";
import OutletKamu from "../../../component/profile/OutletKamu";

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
        <OutletKamu componentId={componentId} />
      </ScrollView>
      <ChangePhotoProfile id={"changePhotoProfile"} />
    </View>
  );
};

export default UserProfile;
