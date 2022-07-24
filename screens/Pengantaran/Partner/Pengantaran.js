import React from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import tw from "../../../lib/tailwind";
import OnlineStatus from "../../../component/onlineStatus";
import OfflineMode from "../../../component/home/Partner/OfflineMode";
import OnlineMode from "../../../component/home/Partner/OnlineMode";
import { useDeviceContext } from "twrnc";
import { GlobalContext } from "../../../lib/ctx";
import OrderProsesPage from "../../../component/home/Partner/OrderProsesPage";
import {
  RefuseOrder,
  InputPinOutlet,
  PickUp,
  OrderSampai,
} from "../../../component/home/BottomSheet";
const Pengantaran = ({ componentId }) => {
  useDeviceContext(tw);
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const { online, adaOrder } = React.useContext(GlobalContext);

  return (
    <View style={tw`bg-white w-full h-full`}>
      {adaOrder ? (
        <OrderProsesPage componentId={componentId} />
      ) : (
        <>
          <View style={tw`absolute top-0 w-full`}>
            <OnlineStatus title={"Pengantaran"} />
          </View>
          {!online ? <OfflineMode /> : <OnlineMode />}
        </>
      )}
      <RefuseOrder id={"refuseOrder"} />
      <InputPinOutlet id={"inputPinOutlet"} />
      <PickUp id={"pickUp"} />
      <OrderSampai id={"orderSampai"} />
    </View>
  );
};

export default Pengantaran;
