import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
const SettingLocation = () => {
  useDeviceContext(tw);
  return <View style={tw``}></View>;
};

export default SettingLocation;
