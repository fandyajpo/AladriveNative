import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import {
  Penarikan,
  Ubah,
  Trf,
  UbahPin,
  LihatSemuaPenarikan,
} from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
const RekeningPenarikan = ({ componentId }) => {
  useDeviceContext(tw);

  const goToRiwayatPenarikan = React.useCallback(() => {
    PushRoute(componentId, "RiwayatPenarikan");
  });

  const goToUbahRekening = React.useCallback(() => {
    PushRoute(componentId, "UbahRekening");
  });

  return (
    <View>
      <View
        style={tw`w-full bg-white rounded-xl border border-gray-300 p-2 flex-col  items-center mb-2`}
      >
        <View style={tw`w-full flex-row`}>
          <Penarikan />
          <View style={[{ flex: 1 }, tw`w-full h-full ml-2`]}>
            <Text style={tw`font-bold text-lg text-gray-800`}>
              Rekening penarikan
            </Text>
            <Text style={tw`text-lg text-gray-800`}>Bank Central Asia</Text>
            <Text style={tw`text-lg text-gray-800`}>
              Haris Dimas - 1425152718
            </Text>
          </View>
        </View>
        <Pressable style={tw`my-4`} onPress={goToUbahRekening}>
          <Ubah />
        </Pressable>
      </View>
      <View
        style={tw`w-full bg-white rounded-xl border border-gray-300 p-2 flex-col items-center`}
      >
        <View style={tw`w-full flex-row`}>
          <UbahPin />
          <View style={[{ flex: 1 }, tw`w-full h-full ml-2`]}>
            <Text style={tw`font-bold text-lg text-gray-800`}>Ubah Pin</Text>
          </View>
        </View>
      </View>

      <View style={tw`w-full flex-row my-4`}>
        <View style={[{ flex: 1 }, tw`w-full h-full`]}>
          <Text style={tw`font-bold text-lg text-gray-800`}>
            Riwayat Penarikan
          </Text>
        </View>
        <Pressable onPress={goToRiwayatPenarikan}>
          <LihatSemuaPenarikan />
        </Pressable>
      </View>

      <View
        style={tw`w-full bg-white rounded-xl border border-gray-300 p-2 flex-col  items-center mb-2`}
      >
        <View style={tw`w-full flex-row`}>
          <View style={[{ flex: 1 }, tw`w-full h-full ml-2`]}>
            <Text style={tw`font-bold text-lg text-gray-800`}>09:00</Text>
            <Text style={tw`text-lg text-gray-800`}>Bank Central Asia</Text>
            <Text style={tw`text-lg text-gray-800`}>
              Haris Dimas - 1425152718
            </Text>
            <View style={tw`flex-row items-center w-full`}>
              <Trf />
              <View
                style={[
                  { flex: 1 },
                  tw`flex-row items-center w-full justify-between ml-2`,
                ]}
              >
                <Text style={tw`text-gray-800 font-bold`}>Rp 400.000</Text>
                <Text style={tw`text-gray-800`}>Berhasil</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RekeningPenarikan;
