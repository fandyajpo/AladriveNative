import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { InputFoto, RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
const InputInformasiDiri = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full pt-28`}>
      <ScrollView
        contentContainerStyle={tw`pb-32`}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Nama</Text>
          <Text style={tw`text-gray-300  text-sm`}>
            Nama asli sesuai KTP agar mudah terverifikasi
          </Text>
          <TextInput
            placeholder="Masukan nama pemilik"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
          <Text style={tw`text-gray-800 font-bold text-sm`}>Email</Text>
          <Text style={tw`text-gray-300 text-sm`}>
            Email aktif untuk verifikasi
          </Text>
          <TextInput
            placeholder="Alamat email"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 my-2`}
          />
          <Text style={tw`text-gray-800 font-bold text-sm`}>No. Handphone</Text>
          <Text style={tw`text-gray-300 text-sm`}>Nomer handphone aktif</Text>
          <TextInput
            placeholder="+ 62"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 my-2`}
          />
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>No. KTP</Text>

          <TextInput
            placeholder="Masukan nomor KTP"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2 my-2`}
          />
          <Text style={tw`text-gray-800 font-bold text-sm`}>Foto KTP</Text>
          <Text style={tw`text-gray-300  text-sm mb-2`}>Upload foto KTP</Text>
          <View style={tw`flex-row items-end`}>
            <InputFoto />
            <Text style={tw`text-red-500 ml-2`}>Hapus foto</Text>
          </View>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Foto SIM</Text>
          <Text style={tw`text-gray-300  text-sm mb-2`}>Upload foto SIM</Text>
          <View style={tw`flex-row items-end`}>
            <InputFoto />
            <Text style={tw`text-red-500 ml-2`}>Hapus foto</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

InputInformasiDiri.options = {
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

export default InputInformasiDiri;
