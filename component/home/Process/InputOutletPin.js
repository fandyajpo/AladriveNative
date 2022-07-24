import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import tw from "../../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import { GlobalContext } from "../../../lib/ctx";
const InputOutletPin = ({ componentId }) => {
  useDeviceContext(tw);

  const {
    online,
    setOnline,
    adaOrder,
    setAdaOrder,
    orderProgress,
    setOrderProgress,
  } = React.useContext(GlobalContext);

  return (
    <View style={tw`h-full w-full flex-col items-center justify-center`}>
      <View style={tw`my-8`}>
        <Text style={tw`text-gray-800 text-xl text-center font-bold`}>
          Pin Outlet
        </Text>
        <Text style={tw`text-gray-800 text-xl text-center`}>
          Masukan pin yang bisa diperoleh dari outlet.
        </Text>
      </View>
      <View style={tw`flex-row items-center`}>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl ml-4`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl mx-4`}
          keyboardType={`number-pad`}
        ></TextInput>
        <TextInput
          style={tw`bg-dgray w-16 h-24 rounded-xl`}
          keyboardType={`number-pad`}
        ></TextInput>
      </View>
      <View style={tw`w-full flex-row items-center my-8 px-4`}>
        <Pressable
          onPress={null}
          style={[
            { flex: 1 },
            tw`bg-dgray w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
          ]}
        >
          <Text style={tw`text-dblue text-sm font-bold`}>Kembali</Text>
        </Pressable>
        <View style={tw`w-2`} />
        <Pressable
          onPress={null}
          style={[
            { flex: 1 },
            tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
          ]}
        >
          <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InputOutletPin;
