import React from "react";
import { View, Text, Pressable } from "react-native";
import { Calender, Search } from "../../lib/listSvg";
import { useDeviceContext } from "twrnc";
import tw from "../../lib/tailwind";
import { PushRoute } from "../../lib/ctx";

import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";

const FilterDate = ({ componentId }) => {
  useDeviceContext(tw);

  const showSheet = React.useCallback(() => {
    SheetManager.show("filterDateSheet");
  }, []);

  const goToSearchRiwayat = React.useCallback(() => {
    PushRoute(componentId, "RiwayatSearch");
  }, []);

  return (
    <View
      style={tw`w-full bg-white py-2 sm:py-4 flex-row justify-around items-center border-t border-b border-gray-300`}
    >
      <Pressable
        onPress={showSheet}
        style={tw`flex-row items-center bg-dgray rounded-full py-2 px-4 sm:px-8`}
      >
        <Calender />
        <Text style={tw`text-dblue text-sm font-bold ml-2`}>
          7 Hari Terakhir
        </Text>
      </Pressable>
      <View
        style={tw`flex-row items-center bg-white rounded-full py-2 px-4 sm:px-8 border border-gray-200`}
      >
        <Text style={tw`text-gray-800 text-sm ml-2`}>1 Okt - 7 Okt</Text>
      </View>
      <Pressable
        onPress={goToSearchRiwayat}
        style={tw`flex-row items-center bg-white rounded-full p-2 border border-gray-200 bg-mgray`}
      >
        <Search />
      </Pressable>
    </View>
  );
};
export default FilterDate;
