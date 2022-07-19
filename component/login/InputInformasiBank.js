import React from "react";
import { Checkbox } from "react-native-paper";

import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { PushRoute } from "../../lib/ctx";
import { RightDropdown } from "../../lib/listSvg";
const InputInformasiBank = ({ componentId }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={tw`w-full h-full pt-28`}>
      <ScrollView
        contentContainerStyle={tw`pb-32`}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Bank</Text>
          <Text style={tw`text-gray-300  text-sm mb-2`}>
            Pilih Bank sebagai penarikan saldo Outlet Anda
          </Text>

          <Pressable
            onPress={() => PushRoute(componentId, "UpdateOutletCategory")}
            style={tw`flex-row items-center justify-between border border-gray-300 p-3 rounded-md`}
          >
            <View style={tw`flex-row items-center`}>
              <View
                style={tw`bg-mgray w-20 rounded-md h-12 items-center justify-center`}
              >
                <Text style={tw`text-gray-400 font-bold text-base`}>Bank</Text>
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
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Pin</Text>
          <Text style={tw`text-gray-300  text-sm`}>
            Pin 6 digit angka untuk keperluan keamanan Outlet Anda.
          </Text>
          <TextInput
            placeholder="Pin Baru"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
          <Text style={tw`text-gray-800 font-bold text-sm`}>Ulangi Pin</Text>

          <TextInput
            placeholder="Pin"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
        </View>
        <View style={tw`p-2`}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

InputInformasiBank.options = {
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

export default InputInformasiBank;
