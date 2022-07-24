import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { RightDropdown, EmptyHistory } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const DATA = [
  {
    id: 0,
    status: "Selesai",
  },
  {
    id: 1,
    status: "Order Batal",
  },
  {
    id: 2,
    status: "Selesai",
  },
  {
    id: 3,
    status: "Selesai",
  },
  {
    id: 4,
    status: "Selesai",
  },
  {
    id: 5,
    status: "Selesai",
  },
  {
    id: 6,
    status: "Selesai",
  },
  {
    id: 7,
    status: "Selesai",
  },
];

const Item = ({ status, componentId }) => {
  const goToDetailRiwayat = React.useCallback(() => {
    PushRoute(componentId, "RiwayatDetail");
  }, []);
  return (
    <View
      style={tw`bg-white border-b border-gray-300 w-full h-24 p-2 flex-row`}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
        <View style={tw`border-b-2 w-1 border-gray-400`} />
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
      </View>
      <View
        style={[
          { flex: 1 },
          tw`w-full h-full ml-2 flex-col justify-center px-2`,
        ]}
      >
        <View style={tw`flex-row items-center w-full justify-between mb-2`}>
          <View>
            <Text style={tw`text-gray-300`}>ALA. 08:18, 08 Jul </Text>
            <Text style={tw`text-gray-800 font-bold`}>3 Km</Text>
          </View>
          <Pressable onPress={goToDetailRiwayat}>
            <RightDropdown />
          </Pressable>
        </View>
        <View style={tw`flex-row items-center w-full justify-between`}>
          <Text
            style={tw`${
              status !== "Selesai" ? "text-red-500" : "text-gray-800"
            }`}
          >
            {status}
          </Text>
          <Text style={tw`text-gray-800 font-bold`}>Rp 12.000</Text>
        </View>
      </View>
    </View>
  );
};

const Empty = React.memo(() => (
  <View style={tw`w-full h-full justify-center items-center pt-32`}>
    <EmptyHistory />
    <Text style={tw`text-gray-800 text-center p-2 text-sm sm:text-base`}>
      Belum ada riwayat order. disini kamu bisa lihat riwayat orderan kamu
    </Text>
  </View>
));

const Header = () => (
  <View style={tw`w-full h-10 bg-dgray flex px-2 justify-center`}>
    <Text style={tw`text-gray-800 text-sm font-bold`}>Hari Ini</Text>
  </View>
);

const DataRiwayat = ({ componentId }) => {
  useDeviceContext(tw);
  const renderItem = ({ item }) => (
    <Item status={item.status} componentId={componentId} />
  );

  return (
    <SafeAreaView
      style={[{ flex: 1, marginTop: StatusBar.currentHeight || 0 }, tw]}
    >
      <FlatList
        ListHeaderComponent={Header}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={Empty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-18`}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DataRiwayat;
