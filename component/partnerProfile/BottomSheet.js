import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { BackRoute } from "../../lib/ctx";

export const RemovePartnerSheet = React.memo(({ id, componentId }) => {
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const closeRemove = React.useCallback(() => {
    BackRoute(componentId);
    SheetManager.hide(id);
  });

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
              Hapus Outlet
            </Text>
            <Text style={tw`text-gray-300`}>
              Setelah ini, kamu ga bakal nerima orderan dari outlet ini
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
              onPress={closeSheet}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Batal</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={closeRemove}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Hapus</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});
export const BatalkanPermintaanSheet = React.memo(({ id, componentId }) => {
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const closeRemove = React.useCallback(() => {
    BackRoute(componentId);
    SheetManager.hide(id);
  });

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
              Batalkan Permintaan
            </Text>
            <Text style={tw`text-gray-300`}>
              Kamu yakin gakjadi minta outlet ini jadi partnermu?
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
              onPress={closeSheet}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Tidak</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={closeRemove}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Ya</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("removePartnerSheet", RemovePartnerSheet);
registerSheet("batalkanPermintaanSheet", BatalkanPermintaanSheet);
