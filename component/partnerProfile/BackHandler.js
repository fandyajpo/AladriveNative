import React from "react";
import { View, Text, Pressable, BackHandler } from "react-native";
import {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { useDeviceContext } from "twrnc";

export const BackHandlerPartnerProfile = ({ componentId }) => {
  useDeviceContext(tw);

  const openSheet = React.useCallback(() => {
    SheetManager.show("removePartnerSheet");
  });

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-28 sm:h-32 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Good Method
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={openSheet} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-red-400 h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Hapus Outlet</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerBatalPermintaan = ({ componentId }) => {
  useDeviceContext(tw);

  const openSheet = React.useCallback(() => {
    SheetManager.show("batalkanPermintaanSheet");
  });

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-28 sm:h-32 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Good Method
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={openSheet} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-dgray h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-dblue`}>
            Batalkan Permintaan
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerPermintaanBergabung = ({ componentId }) => {
  useDeviceContext(tw);

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-28 sm:h-32 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Good Method
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={back} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>
            Permintaan Bergabung
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerRiwayatAntar = ({ componentId }) => {
  useDeviceContext(tw);

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Riwayat Antar
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};
