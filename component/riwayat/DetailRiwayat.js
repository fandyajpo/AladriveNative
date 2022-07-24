import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
const DetailRiwayat = () => {
  useDeviceContext(tw);
  return (
    <ScrollView
      contentContainerStyle={tw`bg-white w-full py-26 px-2`}
      showsVerticalScrollIndicator={false}
    >
      <Text style={tw`text-gray-300 my-2`}>ALA. 08:18, 08 Jul </Text>

      <View style={tw`flex-row items-center w-full`}>
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
        <View style={tw`ml-2`}>
          <Text style={tw`text-gray-800 font-bold `}>Good Method</Text>
          <Text style={tw`text-gray-800`}>
            Jl. Teuku Umar Barat, Padangsambian
          </Text>
        </View>
      </View>
      <View style={tw`border-l-2 h-4 border-gray-400 ml-3.5`} />

      <View style={tw`flex-row w-full border-b border-gray-300`}>
        <View style={tw`bg-black w-8 h-8 rounded-full`} />
        <View style={[{ flex: 1 }, tw`flex-col w-full`]}>
          <View style={tw`ml-2`}>
            <Text style={tw`text-gray-800 font-bold`}>I Made Teja</Text>
            <Text style={tw`text-gray-800`}>
              Jl. Teuku Umar Barat, Padangsambian
            </Text>
          </View>
          <View
            style={tw`bg-mgray w-full h-auto rounded-md border border-gray-300 my-2`}
          >
            <Text style={tw`text-gray-800 p-1`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              in sed pellentesque nulla. Dignissim eget et facilisi massa lectus
              elit, nisi. Volutpat sem orci vitae felis tortor. elit, nisi.
              Volutpat sem orci vitae felis tortor. elit, nisi. Volutpat sem
              orci vitae felis tortor.
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={tw`text-gray-800 text-xl font-bold my-2`}>
          Detail Order
        </Text>
        <View style={tw`flex-row items-center justify-between my-1`}>
          <View style={tw`flex-row items-center`}>
            <Text style={[{ flex: 0.1 }, tw`text-gray-800 mr-3`]}>2</Text>
            <Text style={[{ flex: 0.5 }, tw`text-gray-800 mr-3`]}>
              Soto Ayam
            </Text>
          </View>
          <Text style={tw`text-gray-800`}>20.000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between my-1`}>
          <View style={tw`flex-row items-center`}>
            <Text style={[{ flex: 0.1 }, tw`text-gray-800 mr-3`]}>2</Text>
            <Text style={[{ flex: 0.5 }, tw`text-gray-800 mr-3`]}>
              Soto Ayam
            </Text>
          </View>
          <Text style={tw`text-gray-800`}>20.000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between my-1`}>
          <View style={tw`flex-row items-center`}>
            <Text style={[{ flex: 0.1 }, tw`text-gray-800 mr-3`]}></Text>
            <Text style={[{ flex: 0.5 }, tw`text-gray-800 mr-3`]}>Ongkir</Text>
          </View>
          <Text style={tw`text-gray-800`}>20.000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between my-1`}>
          <View style={tw`flex-row items-center`}>
            <Text style={[{ flex: 0.1 }, tw`text-gray-800 mr-3`]}></Text>
            <Text style={[{ flex: 0.5 }, tw`text-gray-800 mr-3`]}>
              Biaya Layanan
            </Text>
          </View>
          <Text style={tw`text-gray-800`}>- 1000</Text>
        </View>
        <View style={tw`flex-row items-center justify-between my-1`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Grand Total</Text>
          <Text style={tw`text-gray-800 font-bold text-sm`}>20.000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailRiwayat;
