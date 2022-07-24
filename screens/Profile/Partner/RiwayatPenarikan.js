import React from "react";
import { View } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { BackHandlerRiwayatPenarikan } from "../../../component/profile/BackHandler";
const RiwayatPenarikan = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View>
      <BackHandlerRiwayatPenarikan componentId={componentId} />
    </View>
  );
};

export default RiwayatPenarikan;
