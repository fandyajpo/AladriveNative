import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { useDeviceContext } from "twrnc";
import { Navigation } from "react-native-navigation";

export const BackHandlerSaldo = React.memo(({ componentId }) => {
  useDeviceContext(tw);
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-1/4`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-auto h-8 flex items-center justify-center`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Saldo
          </Text>
        </View>
        <View style={tw`w-1/4`} />
      </View>
    </View>
  );
});

export const BackHandlerRiwayatPenarikan = React.memo(({ componentId }) => {
  useDeviceContext(tw);
  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  return (
    <View style={tw`absolute bottom-0 w-full h-24 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-1/4`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-auto h-8 flex items-center justify-center`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Riwayat Penarikan
          </Text>
        </View>
        <View style={tw`w-1/4`} />
      </View>
    </View>
  );
});

export const BackHandlerUbahRekening = ({ componentId }) => {
  useDeviceContext(tw);

  const goToPinVerif = React.useCallback(() => {
    PushRoute(componentId, "Pin");
  }, []);

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
            Ubah Rekening
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={goToPinVerif} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Konfirmasi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerKonfirmPin = ({ componentId, action }) => {
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
            Konfirmasi Pin
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={action} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Konfirmasi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerProsesVerif = ({ componentId }) => {
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
            Ubah Rekening
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export const BackHandlerResetPin = ({ componentId }) => {
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
            Reset Pin
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        onPress={() => Navigation.popToRoot(componentId)}
        style={tw`mt-3 shadow-sm`}
      >
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Konfirmasi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerUpdatePin = ({ componentId }) => {
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
            Ubah Pin
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        onPress={() => Navigation.popToRoot(componentId)}
        style={tw`mt-3 shadow-sm`}
      >
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Konfirmasi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerPilihBank = ({ componentId }) => {
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
            Pilih Bank
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export const BackHandlerTarikSaldo = ({ componentId }) => {
  useDeviceContext(tw);

  const back = React.useCallback(() => {
    BackRoute(componentId);
  }, []);

  const goToVerifPin = React.useCallback(() => PushRoute(componentId, "Pin"));

  return (
    <View style={tw`absolute bottom-0 w-full h-28 sm:h-32 bg-white p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={back}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-xl font-bold`}>
            Tarik Saldo
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={goToVerifPin} style={tw`mt-3 shadow-sm`}>
        <View
          style={tw`w-full bg-dblue h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Konfirmasi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BackHandlerDetailOutlet = ({ componentId }) => {
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
            Good Menthol
          </Text>
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};
