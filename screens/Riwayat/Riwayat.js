import React from "react";
import { View } from "react-native";
import FilterDate from "../../component/riwayat/FilterDate";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { FilterDateSheet } from "../../component/riwayat/BottomSheet";
import DataRiwayat from "../../component/riwayat/DataRiwayat";
const Riwayat = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full`}>
      <DataRiwayat componentId={componentId} />
      <View style={tw`absolute bottom-0 w-full`}>
        <FilterDate componentId={componentId} />
      </View>
      <FilterDateSheet id={"filterDateSheet"} />
    </View>
  );
};

export default Riwayat;
