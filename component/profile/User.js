import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PhotoProfile, ChangePhoto } from "../../lib/listSvg";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";

const User = () => {
  useDeviceContext(tw);

  const openSheet = React.useCallback(() => {
    SheetManager.show("changePhotoProfile");
  }, []);

  return (
    <View style={tw``}>
      <View style={tw`flex-col items-center`}>
        <PhotoProfile />
        <Pressable style={tw`my-4`} onPress={openSheet}>
          <ChangePhoto />
        </Pressable>
        <View style={tw`flex-col items-center`}>
          <Text style={tw`text-gray-800 font-bold`}>
            Fandy Ahmad Januar Pratama
          </Text>
          <Text style={tw`text-gray-800`}>086612347132</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
