/**
 * @format
 */
import React from "react";
import { Navigation } from "react-native-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MMKV } from "react-native-mmkv";
// const storage = new MMKV();
import { storage } from "./lib/strg";
import { GlobalProvider, GlobalContext } from "./lib/ctx";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SheetProvider } from "react-native-actions-sheet";

//MAIN SCREEN
import EnterScreen from "./screens/EnterApp";
import LoginScreen from "./screens/Auth/Login";
import HomeScreen from "./screens/Order";
import CameraScreen from "./screens/Camera";

//AUTH GROUP SCREEN
import OtpScreen from "./screens/Auth/Otp";
import ConfirmPinScreen from "./screens/Auth/ConfirmPin";
import DaftarUserScreen from "./screens/Auth/Daftar";

//HOME GROUP SCREEN
import ProfileScreen from "./screens/Profile/Partner/UserProfile";

//INHOUSE HOME
import PartnerPengantaranScreen from "./screens/Pengantaran/Partner/Pengantaran";
import InHousePengantaran from "./screens/Pengantaran/InHouse/Pengantaran";

//RIWAYAT GROUP SCREEN
import RiwayatScreen from "./screens/Riwayat/Riwayat";
import RiwayatSearchScreen from "./screens/Riwayat/RiwayatSearch";
import RiwayatDetailScreen from "./screens/Riwayat/RiwayatDetail";

//OUTLET GROUP SCREEN
import OutletScreen from "./screens/Outlet/Outlet";
import PartnerProfileScreen from "./screens/Outlet/PartnerProfile";
import OutletProfileScreen from "./screens/Outlet/OutletProfile";
import OutletOnWaitlistScreen from "./screens/Outlet/OutletOnWaitlist";
import MenungguPersetujuanScreen from "./screens/Outlet/MenungguPersetujuan";
import TambahPartnerScreen from "./screens/Outlet/TambahPartner";
import RiwayatAntarScreen from "./screens/Outlet/RiwayatAntar";

//SALDO SCREEN
import SaldoScreen from "./screens/Profile/Partner/Saldo";
import RiwayatPenarikanScreen from "./screens/Profile/Partner/RiwayatPenarikan";

//PROCESS
import InputOutletPinScreen from "./screens/Pengantaran/InputOutletPin";

Navigation.registerComponent(
  "InputOutletPin",
  () => (props) =>
    (
      // <SheetProvider>
      <GlobalProvider>
        <InputOutletPinScreen {...props} />
      </GlobalProvider>
      // </SheetProvider>
    ),
  () => InputOutletPinScreen
);

Navigation.registerComponent(
  "RiwayatPenarikan",
  () => (props) =>
    (
      // <SheetProvider>
      <GlobalProvider>
        <RiwayatPenarikanScreen {...props} />
      </GlobalProvider>
      // </SheetProvider>
    ),
  () => RiwayatPenarikanScreen
);

Navigation.registerComponent(
  "Saldo",
  () => (props) =>
    (
      // <SheetProvider>
      <GlobalProvider>
        <SaldoScreen {...props} />
      </GlobalProvider>
      // </SheetProvider>
    ),
  () => SaldoScreen
);

Navigation.registerComponent(
  "DaftarOutlet",
  () => (props) =>
    (
      // <SheetProvider>
      <GlobalProvider>
        <DaftarUserScreen {...props} />
      </GlobalProvider>
      // </SheetProvider>
    ),
  () => DaftarUserScreen
);

Navigation.registerComponent(
  "ConfirmPin",
  () => (props) =>
    (
      <SheetProvider>
        <GlobalProvider>
          <ConfirmPinScreen {...props} />
        </GlobalProvider>
      </SheetProvider>
    ),
  () => ConfirmPinScreen
);

Navigation.registerComponent(
  "Otp",
  () => (props) =>
    (
      <SheetProvider>
        <GlobalProvider>
          <OtpScreen {...props} />
        </GlobalProvider>
      </SheetProvider>
    ),
  () => OtpScreen
);

Navigation.registerComponent(
  "Enter",
  () => (props) =>
    (
      <GlobalProvider>
        <EnterScreen {...props} />
      </GlobalProvider>
    ),
  () => EnterScreen
);

Navigation.registerComponent(
  "TambahPartner",
  () => (props) =>
    (
      <GlobalProvider>
        <TambahPartnerScreen {...props} />
      </GlobalProvider>
    ),
  () => TambahPartnerScreen
);

Navigation.registerComponent(
  "Login",
  () => (props) =>
    (
      <GlobalProvider>
        <LoginScreen {...props} />
      </GlobalProvider>
    ),
  () => LoginScreen
);

Navigation.registerComponent(
  "Profile",
  () => (props) =>
    (
      <GlobalProvider>
        <ProfileScreen {...props} />
      </GlobalProvider>
    ),
  () => ProfileScreen
);

Navigation.registerComponent(
  "Outlet",
  () => (props) =>
    (
      <GlobalProvider>
        <OutletScreen {...props} />
      </GlobalProvider>
    ),
  () => OutletScreen
);

Navigation.registerComponent(
  "OutletOnWaitlist",
  () => (props) =>
    (
      <GlobalProvider>
        <OutletOnWaitlistScreen {...props} />
      </GlobalProvider>
    ),
  () => OutletOnWaitlistScreen
);

Navigation.registerComponent(
  "PartnerProfile",
  () => (props) =>
    (
      <GlobalProvider>
        <PartnerProfileScreen {...props} />
      </GlobalProvider>
    ),
  () => PartnerProfileScreen
);

Navigation.registerComponent(
  "RiwayatAntar",
  () => (props) =>
    (
      <GlobalProvider>
        <RiwayatAntarScreen {...props} />
      </GlobalProvider>
    ),
  () => RiwayatAntarScreen
);

Navigation.registerComponent(
  "MenungguPersetujuan",
  () => (props) =>
    (
      <GlobalProvider>
        <MenungguPersetujuanScreen {...props} />
      </GlobalProvider>
    ),
  () => MenungguPersetujuanScreen
);

Navigation.registerComponent(
  "OutletProfile",
  () => (props) =>
    (
      <GlobalProvider>
        <OutletProfileScreen {...props} />
      </GlobalProvider>
    ),
  () => OutletProfileScreen
);

Navigation.registerComponent(
  "Riwayat",
  () => (props) =>
    (
      <GlobalProvider>
        <RiwayatScreen {...props} />
      </GlobalProvider>
    ),
  () => RiwayatScreen
);

Navigation.registerComponent(
  "RiwayatSearch",
  () => (props) =>
    (
      <GlobalProvider>
        <RiwayatSearchScreen {...props} />
      </GlobalProvider>
    ),
  () => RiwayatSearchScreen
);

Navigation.registerComponent(
  "RiwayatDetail",
  () => (props) =>
    (
      <GlobalProvider>
        <RiwayatDetailScreen {...props} />
      </GlobalProvider>
    ),
  () => RiwayatDetailScreen
);

Navigation.registerComponent(
  "PartnerPengantaran",
  () => (props) =>
    (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GlobalProvider>
              <PartnerPengantaranScreen {...props} />
            </GlobalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  () => PartnerPengantaranScreen
);

Navigation.registerComponent(
  "InHousePengantaran",
  () => (props) =>
    (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GlobalProvider>
              <InHousePengantaran {...props} />
            </GlobalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  () => InHousePengantaran
);

Navigation.registerComponent("Camera", () => CameraScreen);

Navigation.setDefaultOptions({
  topBar: {
    title: {},
    visible: false,
    drawBehind: false,
    subtitle: {},
    backButton: {},
    background: {},
  },
  statusBar: {
    drawBehind: true,
    style: "dark",
    backgroundColor: "rgba(0,0,0,0)",
    animate: true,
  },
  bottomTabs: {
    titleDisplayMode: "alwaysShow",
    backgroundColor: "#F4F7FA",
  },
  bottomTab: {
    iconColor: "#8a8a8a",
    selectedIconColor: "#4391EF",
    textColor: "#8a8a8a",
    selectedTextColor: "#4391EF",
    fontSize: 10,
    selectedFontSize: 12,
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        x: {
          from: -1000,
          to: 0,
          duration: 300,
        },
        alpha: {
          from: 0.5,
          to: 1,
          duration: 300,
        },
      },
    },
  },
});

const partnerRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: "PartnerPengantaran",
                  id: "PENGANTARAN_SCREEN",
                },
              },
            ],
            options: {
              bottomTab: {
                text: "Pengantaran",
                icon: require("./assets/icons/25/home.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Riwayat", id: "RIWAYAT_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Riwayat",
                icon: require("./assets/icons/25/mockup.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Outlet", id: "OUTLET_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Outlet",
                icon: require("./assets/icons/25/stories.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Profile", id: "PROFILE_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Profile",
                icon: require("./assets/icons/25/user.png"),
              },
            },
          },
        },
      ],
    },
    stack: {
      children: [
        {
          component: {
            name: "Camera",
            passProps: {
              text: "Camera screen",
            },
          },
        },
      ],
    },
  },
};

const inHouseRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: "InHousePengantaran",
                  id: "INHOUSE_PENGANTARAN_SCREEN",
                },
              },
            ],
            options: {
              bottomTab: {
                text: "Pengantaran",
                icon: require("./assets/icons/25/home.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Riwayat", id: "RIWAYAT_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Riwayat",
                icon: require("./assets/icons/25/mockup.png"),
              },
            },
          },
        },

        {
          stack: {
            children: [
              {
                component: { name: "Profile", id: "PROFILE_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Profile",
                icon: require("./assets/icons/25/user.png"),
              },
            },
          },
        },
      ],
    },
    stack: {
      children: [
        {
          component: {
            name: "Camera",
            passProps: {
              text: "Camera screen",
            },
          },
        },
      ],
    },
  },
};

// const loginRoot = {
//   root: {
//     component: {
//       name: "Login",
//       options: {
//         statusBar: {
//           drawBehind: true,
//           backgroundColor: "transparent",
//           animate: false,
//         },
//       },
//     },
//   },
// };

const enterApp = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: "Otp",
            options: {
              statusBar: {
                drawBehind: true,
                backgroundColor: "transparent",
                animate: false,
              },
            },
          },
        },
      ],
    },
    stack: {
      children: [
        {
          component: {
            name: "Enter",
            options: {
              statusBar: {
                drawBehind: true,
                backgroundColor: "transparent",
                animate: false,
              },
            },
          },
        },
      ],
    },
  },
};

const listener = storage.addOnValueChangedListener(async (changedKey) => {
  const [token, screen] = await Promise.all([
    storage.contains("token"),
    storage.contains("screen"),
  ]);
  if (token && screen) {
    Navigation.setRoot(loginRoot);
  }
});

function isLoggedIn(vals) {
  storage.delete("screen");
  const tok = storage.contains("token");
  return tok;
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(partnerRoot);
});
