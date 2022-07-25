import React from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { RightDropdown, TandaI } from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";
import { BackHandlerUbahRekening } from "../../../component/profile/BackHandler";
const UbahRekening = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-white w-full h-full`}>
      <View style={tw`w-full h-full pt-10`}>
        <ScrollView
          contentContainerStyle={tw`pb-32`}
          showsVerticalScrollIndicator={false}
        >
          <View style={tw`p-2`}>
            <Pressable
              //   onPress={() => PushRoute(componentId, "UpdateOutletCategory")}
              style={tw`flex-row items-center border border-gray-300 p-3 rounded-md`}
            >
              <TandaI />

              <Text style={tw`text-gray-800 px-2`}>
                Pergantian rekening membutuhkan proses verifikasi setidaknya 24
                jam.
              </Text>
            </Pressable>
          </View>

          <View style={tw`p-2`}>
            <Text style={tw`text-gray-800 font-bold text-sm mb-2`}>Bank</Text>

            <Pressable
              onPress={() => PushRoute(componentId, "PilihBank")}
              style={tw`flex-row items-center justify-between border border-gray-300 p-3 rounded-md`}
            >
              <View style={tw`flex-row items-center`}>
                <View
                  style={tw`bg-mgray w-20 rounded-md h-12 items-center justify-center`}
                >
                  <Text style={tw`text-gray-400 font-bold text-base`}>
                    Bank
                  </Text>
                </View>
                <Text style={tw`text-gray-800 font-bold ml-2`}>Pilih Bank</Text>
              </View>
              <RightDropdown />
            </Pressable>

            <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
              No. Rekening
            </Text>

            <TextInput
              placeholder="Nomor Rekening"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
            />
            <Text style={tw`text-gray-800 font-bold text-sm`}>Atas Nama</Text>
            <Text style={tw`text-gray-300 text-sm`}>
              Email aktif untuk verifikasi
            </Text>
            <TextInput
              placeholder="Atas Nama Bank"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
            />
          </View>
        </ScrollView>
      </View>
      <BackHandlerUbahRekening componentId={componentId} />
    </View>
  );
};

UbahRekening.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default UbahRekening;
