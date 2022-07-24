import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import PagerView from "react-native-pager-view";
import tw from "../../../lib/tailwind";
import OrderDetail from "../OrderDetail";
import OrderHeader from "../OrderHeader";
import InputPin from "../InputPin";
import { useDeviceContext } from "twrnc";
import AcceptOrRefuse from "../AcceptOrRefuse";
import InputRestoPin from "../Process/InputRestoPin";
import HomeOnTheWay from "../Process/HomeOnTheWay";

import HomeProses from "../Process/HomeProses";
import PickUp from "../PickUp";
import Sampai from "../Sampai";

import { GlobalContext } from "../../../lib/ctx";
import HomeSampai from "../Process/HomeSampai";

const OrderProsesPage = ({ componentId }) => {
  useDeviceContext(tw);

  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);

  const prosesRef = React.useRef(0);

  React.useEffect(() => {
    prosesRef.current.setPage(orderProgress);
    console.log(orderProgress);
  }, [orderProgress]);

  return (
    <>
      <PagerView ref={prosesRef} style={styles.pagerView} initialPage={0}>
        <View>
          <OrderDetail />
          <View style={tw`absolute top-0 w-full`}>
            <OrderHeader />
          </View>
          <View style={tw`absolute bottom-0 w-full`}>
            <AcceptOrRefuse prosesRef={prosesRef} />
          </View>
        </View>
        <View>
          <InputRestoPin prosesRef={prosesRef} />
          <View style={tw`absolute bottom-0 w-full flex-col items-center`}>
            <View style={tw`w-44  p-2`}>
              <Pressable style={tw`border border-gray-300 rounded-full p-2`}>
                <Text style={tw`text-gray-300 text-center`}>Order Detail</Text>
              </Pressable>
            </View>
            <InputPin componentId={componentId} prosesRef={prosesRef} />
          </View>
        </View>

        <View>
          <HomeProses prosesRef={prosesRef} />
          <View style={tw`absolute bottom-0 w-full flex-col items-center`}>
            <View style={tw`w-44  p-2`}>
              <Pressable style={tw`border border-gray-300 rounded-full p-2`}>
                <Text style={tw`text-gray-300 text-center`}>Order Detail</Text>
              </Pressable>
            </View>
            <PickUp prosesRef={prosesRef} />
          </View>
        </View>
        <View>
          <HomeOnTheWay prosesRef={prosesRef} />
          <View style={tw`absolute bottom-0 w-full flex-col items-center`}>
            <View style={tw`w-44  p-2`}>
              <Pressable style={tw`border border-gray-300 rounded-full p-2`}>
                <Text style={tw`text-gray-300 text-center`}>Order Detail</Text>
              </Pressable>
            </View>
            <Sampai prosesRef={prosesRef} />
          </View>
        </View>
        <View>
          <HomeOnTheWay prosesRef={prosesRef} />
          <View style={tw`absolute bottom-0 w-full flex-col items-center`}>
            <View style={tw`w-44  p-2`}>
              <Pressable style={tw`border border-gray-300 rounded-full p-2`}>
                <Text style={tw`text-gray-300 text-center`}>Order Detail</Text>
              </Pressable>
            </View>
            <Sampai prosesRef={prosesRef} />
          </View>
        </View>
        <View>
          <HomeSampai prosesRef={prosesRef} />
          <View style={tw`absolute bottom-0 w-full flex-col items-center`}>
            <View style={tw`w-44  p-2`}>
              <Pressable style={tw`border border-gray-300 rounded-full p-2`}>
                <Text style={tw`text-gray-300 text-center`}>Order Detail</Text>
              </Pressable>
            </View>
            <Sampai prosesRef={prosesRef} />
          </View>
        </View>
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default OrderProsesPage;
