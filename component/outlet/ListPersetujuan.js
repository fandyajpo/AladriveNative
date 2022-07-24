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
import { Location, Market, WaitPartner } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const DATA = [
  {
    id: 0,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 1,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 2,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 3,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 4,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 5,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
  {
    id: 6,
    status: "onwait",
    outlet_name: "Redwhite",
    location: "Rumah Mama Amy",
    tag: ["Coffee", "House", "Liar", "Undefined"],
    perKm: "Rp 8000/Km",
  },
];

const Item = ({ status, name, location, tag, perKm, componentId }) => {
  const goToOutlet = React.useCallback(() => {
    PushRoute(componentId, "OutletOnWaitlist");
  }, []);

  return (
    <Pressable
      onPress={goToOutlet}
      style={tw`bg-white border border-gray-300 w-full h-auto p-2 flex-row rounded-xl mb-2`}
    >
      <View style={tw`bg-black w-14 h-14 rounded-xl`} />
      <View style={[{ flex: 1 }, tw`w-full h-full ml-2`]}>
        <View style={tw`flex-row items-center justify-between`}>
          <View>
            <Text style={tw`text-lg font-bold text-gray-800`}>{name}</Text>
            <View style={tw`flex-row items-center`}>
              <Location />
              <Text style={tw`ml-1 text-gray-800 text-sm`}>{location}</Text>
            </View>
          </View>
          {/* {status === "onwait" && <WaitPartner />} */}
          <WaitPartner />
        </View>
        <View style={tw`flex-row items-center flex-wrap my-2`}>
          {tag.map((t, i) => {
            return (
              <Text
                key={i}
                style={tw`text-gray-400 bg-gray-100 mr-1 mt-1 text-xs rounded-md p-1`}
              >
                {t}
              </Text>
            );
          })}
        </View>
        <View style={tw`flex-row w-full items-center justify-between`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>2-5 Km</Text>
          <Text style={tw`text-gray-800 font-bold text-sm`}>{perKm}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const Empty = React.memo(() => (
  <View style={tw`w-full h-full justify-center items-center pt-32`}>
    <Market />
    <Text style={tw`text-gray-800 text-center text-sm sm:text-base font-bold`}>
      Belum ada outlet terhubung
    </Text>
    <Text style={tw`text-gray-800 text-center p-2 text-sm sm:text-base`}>
      Kamu harus gabung dulu sama outlet, biar bisa nerima pesanan dari mereka.
    </Text>
  </View>
));

const ListPersetujuan = ({ componentId }) => {
  useDeviceContext(tw);
  const renderItem = ({ item }) => (
    <Item
      status={item.status}
      componentId={componentId}
      name={item.outlet_name}
      tag={item.tag}
      location={item.location}
      perKm={item.perKm}
    />
  );

  return (
    <SafeAreaView
      style={[{ flex: 1, marginTop: StatusBar.currentHeight || 0 }, tw]}
    >
      <FlatList
        ListEmptyComponent={Empty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-24 pt-2 px-2`}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ListPersetujuan;
