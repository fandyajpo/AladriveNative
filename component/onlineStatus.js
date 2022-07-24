import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { Switch } from "react-native-switch";
import { GlobalContext } from "../lib/ctx";

import { useDeviceContext } from "twrnc";
const OnlineStatus = ({ title }) => {
  useDeviceContext(tw);
  const { online, setOnline } = React.useContext(GlobalContext);
  return (
    <View
      style={tw`bg-mgray w-full h-24 px-2 pt-11 flex-row items-center justify-between`}
    >
      <View style={[{ flex: 1 }, tw`w-full`]}>
        <Text style={tw`text-gray-800 font-black text-2xl`}>{title}</Text>
      </View>
      <View style={[{ flex: 1 }, tw`w-full flex-row justify-end`]}>
        <Switch
          value={online}
          onValueChange={() => setOnline(!online)}
          disabled={false}
          activeText={"Online"}
          inActiveText={"Offline"}
          activeTextStyle={tw`text-white`}
          circleSize={30}
          barHeight={34}
          circleBorderWidth={4}
          circleBorderActiveColor={"#4391EF"}
          circleBorderInactiveColor={"gray"}
          backgroundActive={"#4391EF"}
          backgroundInactive={"#E6E7E8"}
          circleActiveColor={"white"}
          circleInActiveColor={"white"}
          changeValueImmediately={true}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
          outerCircleStyle={{}}
          renderActiveText={true}
          renderInActiveText={true}
          switchLeftPx={2}
          switchRightPx={2}
          switchWidthMultiplier={3.5}
          switchBorderRadius={30}
        />
      </View>
    </View>
  );
};

export default OnlineStatus;
