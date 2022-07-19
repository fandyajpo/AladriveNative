import { View } from "react-native";
import React from "react";
import SplashScreen from "react-native-splash-screen";

import { GlobalContext } from "../lib/ctx";
import tw from "../lib/tailwind";

import { Navigation } from "react-native-navigation";

const Order = ({ componentId }) => {
  const { state, fnr, setSecure, getSecure, logGer } =
    React.useContext(GlobalContext);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () =>
          Promise.all([fnr({ type: "screen", payload: "home" })]),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

export default React.memo(Order);
