import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import tw from "../../lib/tailwind";
import { OpenMaps } from "../../lib/listSvg";
import { RadioButton } from "react-native-paper";
import { GlobalContext } from "../../lib/ctx";

export const RefuseOrder = React.memo(({ id }) => {
  const { adaOrder, setAdaOrder, setOrderProgress } =
    React.useContext(GlobalContext);
  const [checked, setChecked] = React.useState("a");
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const closeRefuse = React.useCallback(() => {
    Promise.all([
      setOrderProgress(0),
      SheetManager.hide(id),
      setAdaOrder(false),
    ]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>Tolak Order</Text>
            <Text style={tw`text-gray-300`}>
              Sisa “Tolak Order” hari ini adalah 3. Apa kamu yakin menolak
              orderan? pilih alasan dibawah ini untuk menolak order.
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`bg-white w-full h-auto flex-row`}>
            <View style={tw`mr-2`}>
              <RadioButton
                value="a"
                color="#4391EF"
                status={checked === "a" ? "checked" : "unchecked"}
                onPress={() => setChecked("a")}
                uncheckedColor={"#9ca3af"}
              />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-base mt-2 mr-10`}>
                Saya akan offline
              </Text>
            </View>
          </View>
          <View style={tw`bg-white w-full h-auto flex-row`}>
            <View style={tw`mr-2`}>
              <RadioButton
                value="b"
                color="#4391EF"
                status={checked === "b" ? "checked" : "unchecked"}
                onPress={() => setChecked("b")}
                uncheckedColor={"#9ca3af"}
              />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-base mt-2 mr-10`}>
                Lokasi terlalu jauh
              </Text>
            </View>
          </View>
          <View style={tw`bg-white w-full h-auto flex-row`}>
            <View style={tw`mr-2`}>
              <RadioButton
                value="c"
                color="#4391EF"
                status={checked === "c" ? "checked" : "unchecked"}
                onPress={() => setChecked("c")}
                uncheckedColor={"#9ca3af"}
              />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-base mt-2 mr-10`}>
                Lainnya
              </Text>
            </View>
          </View>
          <View style={tw`p-4 flex-row justify-center`}>
            <Pressable
              onPress={closeSheet}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Batal</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={closeRefuse}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Konfirmasi</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

export const InputPinOutlet = React.memo(({ id }) => {
  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);

  const back = React.useCallback(() => {
    SheetManager.hide(id);
  }, []);

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(orderProgress + 1)]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        containerStyle={tw`w-full h-full bg-white`}
        bounciness={0}
        closeAnimationDuration={200}
        delayActionSheetDrawTime={0}
        delayActionSheetDraw={0}
        id={id}
        indicatorStyle={tw`bg-gray-300`}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
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
              onPress={back}
              style={[
                { flex: 1 },
                tw`bg-dgray w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
              ]}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={nextProcess}
              style={[
                { flex: 1 },
                tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
              ]}
            >
              <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

// export const OrderDetailSheet = React.memo(({ id }) => {
//   const { setOrderProgress } = React.useContext(GlobalContext);

//   const back = React.useCallback(() => {
//     SheetManager.hide(id);
//   }, []);

//   const nextProcess = React.useCallback(() => {
//     Promise.all([SheetManager.hide(id), setOrderProgress(2)]);
//   });

//   return (
//     <View style={tw`absolute bottom-0`}>
//       <ActionSheet
//         bounciness={0}
//         closeAnimationDuration={200}
//         indicatorColor={"blue"}
//         delayActionSheetDrawTime={0}
//         delayActionSheetDraw={0}
//         id={id}
//         indicatorStyle={tw`bg-gray-300`}
//         bounceOnOpen={true}
//         gestureEnabled={true}
//         springOffset={100}
//       >
//         <View style={tw`h-full w-full flex-col items-center justify-center`}>
//           <View style={tw`my-8`}>
//             <Text style={tw`text-gray-800 text-xl text-center font-bold`}>
//               Pin Outlet
//             </Text>
//             <Text style={tw`text-gray-800 text-xl text-center`}>
//               Masukan pin yang bisa diperoleh dari outlet.
//             </Text>
//           </View>
//           <View style={tw`flex-row items-center`}>
//             <TextInput
//               style={tw`bg-dgray w-16 h-24 rounded-xl`}
//               keyboardType={`number-pad`}
//             ></TextInput>
//             <TextInput
//               style={tw`bg-dgray w-16 h-24 rounded-xl ml-4`}
//               keyboardType={`number-pad`}
//             ></TextInput>
//             <TextInput
//               style={tw`bg-dgray w-16 h-24 rounded-xl mx-4`}
//               keyboardType={`number-pad`}
//             ></TextInput>
//             <TextInput
//               style={tw`bg-dgray w-16 h-24 rounded-xl`}
//               keyboardType={`number-pad`}
//             ></TextInput>
//           </View>
//           <View style={tw`w-full flex-row items-center my-8 px-4`}>
//             <Pressable
//               onPress={back}
//               style={[
//                 { flex: 1 },
//                 tw`bg-dgray w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
//               ]}
//             >
//               <Text style={tw`text-dblue text-sm font-bold`}>Kembali</Text>
//             </Pressable>
//             <View style={tw`w-2`} />
//             <Pressable
//               onPress={nextProcess}
//               style={[
//                 { flex: 1 },
//                 tw`bg-dblue w-full rounded-full h-10 sm:h-12 flex items-center justify-center`,
//               ]}
//             >
//               <Text style={tw`text-white text-sm font-bold`}>Ok</Text>
//             </Pressable>
//           </View>
//         </View>
//       </ActionSheet>
//     </View>
//   );
// });

export const PickUp = React.memo(({ id }) => {
  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(orderProgress + 1)]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>Pick Up</Text>
            <Text style={tw`text-gray-300`}>
              Setelah kamu Pick Up, kamu masuk dipengantaran order.
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`p-4 flex-row justify-center`}>
            <Pressable
              onPress={closeSheet}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Batal</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={nextProcess}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Antar</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

export const OrderSampai = React.memo(({ id }) => {
  const { orderProgress, setOrderProgress } = React.useContext(GlobalContext);
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(orderProgress + 1)]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>
              Order Sampai
            </Text>
            <Text style={tw`text-gray-300`}>
              Ini akan menjadi pemberitahuan ke customer, bahwa oerderan telah
              sampai
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`p-4 flex-row justify-center`}>
            <Pressable
              onPress={closeSheet}
              style={tw`w-2/4 bg-dgray h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-dblue text-sm font-bold`}>Batal</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={nextProcess}
              style={tw`w-2/4 bg-dblue h-10 sm:h-12 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Sampai</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

export const OrderDetail = React.memo(({ id }) => {
  const { setOrderProgress } = React.useContext(GlobalContext);

  const refuseOrder = React.useCallback(() => {
    Promise.all([
      SheetManager.hide("orderDetail"),
      SheetManager.show("refuseOrder"),
    ]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorStyle={tw`bg-gray-300`}
        delayActionSheetDrawTime={0}
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`pb-12 flex-row justify-center`}>
          <ScrollView
            contentContainerStyle={tw`bg-white w-full px-2`}
            showsVerticalScrollIndicator={false}
          >
            <Text style={tw`text-gray-300 my-2`}>ALA. 08:18, 08 Jul </Text>

            <View style={tw`flex-row items-center justify-between`}>
              <View style={[{ flex: 1 }, tw`flex-row items-center w-full`]}>
                <View style={tw`bg-black w-8 h-8 rounded-full`} />
                <View style={tw`ml-2`}>
                  <Text style={tw`text-gray-800 font-bold`}>Good Method</Text>
                  <Text style={tw`text-gray-800`}>
                    Jl. Teuku Umar Barat, Padangsambian
                  </Text>
                </View>
              </View>
              <OpenMaps />
            </View>
            <View style={tw`border-l-2 h-4 border-gray-400 ml-3.5`} />

            <View style={tw`flex-row w-full border-b border-gray-300`}>
              <View style={tw`bg-black w-8 h-8 rounded-full`} />
              <View style={[{ flex: 1 }, tw`flex-col w-full`]}>
                <View style={tw`flex-row items-center justify-between`}>
                  <View style={tw`ml-2`}>
                    <Text style={tw`text-gray-800 font-bold`}>I Made Teja</Text>
                    <Text style={tw`text-gray-800`}>
                      Jl. Teuku Umar Barat, Padangsambian
                    </Text>
                  </View>
                  <OpenMaps />
                </View>
                <View
                  style={tw`bg-mgray w-full h-auto rounded-md border border-gray-300 my-2`}
                >
                  <Text style={tw`text-gray-800 p-1`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eleifend in sed pellentesque nulla. Dignissim eget et
                    facilisi massa lectus elit, nisi. Volutpat sem orci vitae
                    felis tortor. elit, nisi. Volutpat sem orci vitae felis
                    tortor. elit, nisi. Volutpat sem orci vitae felis tortor.
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
                  <Text style={[{ flex: 0.5 }, tw`text-gray-800 mr-3`]}>
                    Ongkir
                  </Text>
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
                <Text style={tw`text-gray-800 font-bold text-sm`}>
                  Grand Total
                </Text>
                <Text style={tw`text-gray-800 font-bold text-sm`}>20.000</Text>
              </View>
            </View>
            <Pressable
              onPress={refuseOrder}
              style={tw`bg-red-500 w-full h-10 sm:h-12 rounded-full items-center justify-center my-4`}
            >
              <Text style={tw`text-white`}>Batalkan Order</Text>
            </Pressable>
          </ScrollView>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("refuseOrder", RefuseOrder);
registerSheet("inputPinOutlet", InputPinOutlet);
registerSheet("pickUp", PickUp);
registerSheet("orderSampai", OrderSampai);
registerSheet("orderDetail", OrderDetail);
