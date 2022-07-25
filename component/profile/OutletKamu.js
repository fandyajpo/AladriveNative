import React from "react";
import { Text, View, Pressable } from "react-native";
import { Location } from "../../lib/listSvg";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { PushRoute } from "../../lib/ctx";
const OutletKamu = ({ componentId }) => {
  useDeviceContext(tw);

  const goToDetailOutlet = React.useCallback(() => {
    PushRoute(componentId, "DetailOutlet");
  });

  return (
    <View style={tw`mt-4`}>
      <Text style={tw`text-gray-800 font-bold my-2 text-xl`}>Outlet Kamu</Text>

      <Pressable
        onPress={goToDetailOutlet}
        style={tw`bg-white border border-gray-300 w-full h-auto p-2 flex-row rounded-xl mb-2`}
      >
        <View style={tw`bg-black w-14 h-14 rounded-xl`} />
        <View style={[{ flex: 1 }, tw`w-full h-full ml-2`]}>
          <View style={tw`flex-row items-center justify-between`}>
            <View>
              <Text style={tw`text-lg font-bold text-gray-800`}>
                Tingkerbell
              </Text>
              <View style={tw`flex-row items-center`}>
                <Location />
                <Text style={tw`ml-1 text-gray-800 text-sm`}>Jln. Langko</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex-row items-center flex-wrap my-2`}>
            <Text
              style={tw`text-gray-400 bg-gray-100 mr-1 mt-1 text-xs rounded-md p-1`}
            >
              Numb
            </Text>
            <Text
              style={tw`text-gray-400 bg-gray-100 mr-1 mt-1 text-xs rounded-md p-1`}
            >
              Numb
            </Text>
            <Text
              style={tw`text-gray-400 bg-gray-100 mr-1 mt-1 text-xs rounded-md p-1`}
            >
              Numb
            </Text>
          </View>
          <View style={tw`flex-row w-full items-center justify-between`}>
            <Text style={tw`text-gray-800 font-bold text-sm`}>2-5 Km</Text>
            <Text style={tw`text-gray-800 font-bold text-sm`}>8000/Km</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default OutletKamu;
