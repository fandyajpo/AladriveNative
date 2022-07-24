import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Pressable, Text } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { RightDropdown } from "../../lib/listSvg";

export const FilterDateSheet = React.memo(({ id }) => {
  useDeviceContext(tw);

  const closeSheet = React.useCallback(() => {
    SheetManager.hide("filterDateSheet");
  }, []);

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-row items-center p-4`}>
            <Text style={tw`text-gray-800 font-bold text-sm sm:text-lg`}>
              Lihat riwayat pengantaranmu
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        closeOnPressBack={true}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={closeSheet}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-sm sm:text-sm`}>
                    7 Hari Terakhir
                  </Text>
                  <Text style={tw`text-gray-300 text-xs sm:text-base`}>
                    Riwayatmu 7 hari terakhir
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={closeSheet}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-sm sm:text-sm`}>
                    14 Hari Terakhir
                  </Text>
                  <Text style={tw`text-gray-300 text-xs sm:text-base`}>
                    Riwayatmu 7 hari terakhir
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={closeSheet}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-sm sm:text-sm`}>
                    30 Hari Terakhir
                  </Text>
                  <Text style={tw`text-gray-300 text-xs sm:text-base`}>
                    Riwayatmu 7 hari terakhir
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={closeSheet}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-sm sm:text-sm`}>
                    Bulan Kemarin
                  </Text>
                  <Text style={tw`text-gray-300 text-xs sm:text-base`}>
                    Riwayatmu 7 hari terakhir
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
          </View>
          <View style={tw`pt-4 pl-4 pr-4 pb-4`}>
            <Pressable
              onPress={closeSheet}
              style={tw`w-full bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Kembali</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("filterDateSheet", FilterDateSheet);
