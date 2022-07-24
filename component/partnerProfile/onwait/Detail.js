import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { CalenderIcon, Location } from "../../../lib/listSvg";
const Detail = () => {
  useDeviceContext(tw);
  return (
    <View style={tw`bg-white w-full px-2`}>
      <Text style={tw`text-sm sm:text-base font-bold text-gray-800 my-2 `}>
        Tagging
      </Text>
      <View style={tw`flex-row flex-wrap`}>
        <Text
          style={tw`bg-white py-2 px-4 text-gray-400 rounded-full mr-2 shadow-sm border border-gray-100`}
        >
          Kopi
        </Text>
        <Text
          style={tw`bg-white py-2 px-4 text-gray-400 rounded-full mr-2 shadow-sm border border-gray-100`}
        >
          Coffee
        </Text>
        <Text
          style={tw`bg-white py-2 px-4 text-gray-400 rounded-full mr-2 shadow-sm border border-gray-100`}
        >
          Espresso
        </Text>
      </View>
      <Text style={tw`text-sm sm:text-base font-bold text-gray-800 my-2 `}>
        Deskripsi
      </Text>
      <Text style={tw`text-gray-800 text-sm`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis quam
        sollicitudin ipsum commodo purus, tempor urna sem aliquam.
      </Text>

      <Text style={tw`text-sm sm:text-base font-bold text-gray-800 my-2`}>
        Lokasi
      </Text>
      <View style={tw`flex-row`}>
        <View style={tw`mt-0.2`}>
          <Location />
        </View>
        <Text style={[{ flex: 1 }, tw`text-gray-800 pl-1`]}>
          Jl. Teuku Umar Barat No.371, Padangsambian Klod, Kec. Denpasar Bar.,
          Kota Denpasar, Bali
        </Text>
      </View>
      <Text style={tw`text-sm sm:text-base font-bold text-gray-800 my-2`}>
        Jam Operasional
      </Text>
      <View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2 `}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Senin</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Selasa</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Rabu</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Kamis</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Jum'at</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Sabtu</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
        <View
          style={tw`flex-row justify-between border-b border-gray-300 py-2`}
        >
          <View style={tw`flex-row items-center`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Minggu</Text>
          </View>
          <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
