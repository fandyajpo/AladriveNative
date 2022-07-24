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
import { RightDropdown } from "../../lib/listSvg";
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
        <View style={tw`border-b-2 w-1`} />
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

const Empty = () => (
  <View style={tw`w-full h-full pt-36 flex items-center justify-center`}>
    <Text style={tw`text-gray-800 text-sm sm:text-base`}>
      Apa yang kamu cari?
    </Text>
  </View>
);

const SearchRiwayat = ({ componentId }) => {
  useDeviceContext(tw);
  const renderItem = ({ item }) => (
    <Item status={item.status} componentId={componentId} />
  );

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        ListEmptyComponent={Empty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-36 px-2`}
        data={null}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default SearchRiwayat;
