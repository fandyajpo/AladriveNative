import React, { useEffect } from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute, BackRoute } from "../../lib/ctx";
import DatePicker from "react-native-modern-datepicker";

export const AddTaggingSheet = React.memo(({ id }) => {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`p-4`}>
            <Text style={tw`text-gray-800 font-bold text-base`}>
              Tambah Tagging
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        // ref={ourRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`flex-row items-center justify-between px-4`}>
            <TextInput
              placeholder="Tambah tag outlet kamu"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10p px-2 w-full`}
            />
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              // onPress={() => ourRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              // onPress={() => ourRef.current.hide()}
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

export const ResetDaftar = React.memo(({ id, logoutRef }) => {
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
              Anda yakin ingin keluar?
            </Text>
            <Text style={tw`text-gray-300`}>Keluar dari akun</Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={logoutRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`p-4 flex-row justify-center`}>
            <Pressable
              onPress={() => logoutRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => {
                storage.clearAll();
                logoutRef.current.hide();
              }}
              style={tw`w-2/4 bg-mgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("addTaggingSheet", AddTaggingSheet);
registerSheet("resetDaftar", ResetDaftar);
