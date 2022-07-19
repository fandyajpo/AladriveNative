import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { InformasiDiri, InformasiBank } from "../../lib/listSvg";

const DaftarHeader = ({ daftar }) => {
  return (
    <View
      style={tw`bg-mgray w-full h-28 flex-col items-center justify-between rounded-b-xl absolute top-0 px-4 pt-10 pb-4`}
    >
      <View style={tw`flex items-start w-full`}>
        {daftar === 0 ? <InformasiDiri /> : daftar === 1 && <InformasiBank />}
      </View>

      <View style={tw`flex-row items-center`}>
        <View
          style={tw`${
            daftar === 0 ? "bg-dblue" : "bg-dblue/50"
          } w-2 h-2 rounded-full`}
        />
        <View
          style={tw`${
            daftar === 1 ? "bg-dblue" : "bg-dblue/50"
          } w-2 h-2 rounded-full mx-2`}
        />
      </View>
    </View>
  );
};

export default DaftarHeader;
