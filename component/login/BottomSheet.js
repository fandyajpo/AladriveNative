import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { BackRoute } from "../../lib/ctx";

export const CancelRegistSheet = React.memo(({ id, componentId }) => {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>
              Yakin kembali?
            </Text>
            <Text style={tw`text-gray-300`}>
              Datamu akan ter-reset tanpa menyimpanya, yakin kembali?
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`p-4 flex-row justify-center`}>
            <Pressable
              onPress={() => SheetManager.hide("cancelRegistSheet")}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Batal</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => {
                BackRoute(componentId);
                SheetManager.hide("cancelRegistSheet");
              }}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("cancelRegistSheet", CancelRegistSheet);
