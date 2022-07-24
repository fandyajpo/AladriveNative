import React from "react";
import { View } from "react-native";
import TambahPartner from "../../component/outlet/TambahPartner";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import ListPartner from "../../component/outlet/ListPartner";
import PersetujuanPartner from "../../component/outlet/PersetujuanPartner";
const Outlet = ({ componentId }) => {
  useDeviceContext(tw);
  return (
    <View style={tw`w-full h-full`}>
      <ListPartner componentId={componentId} />
      <View style={tw`absolute top-10 sm:top-12 z-10 w-full px-2`}>
        <PersetujuanPartner componentId={componentId} />
      </View>
      <View style={tw`absolute bottom-0 w-full`}>
        <TambahPartner componentId={componentId} />
      </View>
    </View>
  );
};

export default Outlet;
