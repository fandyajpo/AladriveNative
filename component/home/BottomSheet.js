import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable, TextInput } from "react-native";
import tw from "../../lib/tailwind";
import { RadioButton } from "react-native-paper";
import { GlobalContext } from "../../lib/ctx";

export const RefuseOrder = React.memo(({ id, componentId }) => {
  const { adaOrder, setAdaOrder } = React.useContext(GlobalContext);
  const [checked, setChecked] = React.useState("a");
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const closeRefuse = React.useCallback(() => {
    SheetManager.hide(id);
    setAdaOrder(false);
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
  const { setOrderProgress } = React.useContext(GlobalContext);

  const back = React.useCallback(() => {
    SheetManager.hide(id);
  }, []);

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(2)]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={0}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
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

export const OrderDetailSheet = React.memo(({ id }) => {
  const { setOrderProgress } = React.useContext(GlobalContext);

  const back = React.useCallback(() => {
    SheetManager.hide(id);
  }, []);

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(2)]);
  });

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={0}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
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

export const PickUp = React.memo(({ id, componentId }) => {
  const { setOrderProgress } = React.useContext(GlobalContext);
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
  });

  const nextProcess = React.useCallback(() => {
    Promise.all([SheetManager.hide(id), setOrderProgress(3)]);
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

export const OrderSampai = React.memo(({ id, componentId }) => {
  const { adaOrder, setAdaOrder } = React.useContext(GlobalContext);
  const [checked, setChecked] = React.useState("a");
  const closeSheet = React.useCallback(() => {
    SheetManager.hide(id);
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
              // onPress={closeRefuse}
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

registerSheet("refuseOrder", RefuseOrder);
registerSheet("inputPinOutlet", InputPinOutlet);
registerSheet("pickUp", PickUp);
registerSheet("orderSampai", OrderSampai);
