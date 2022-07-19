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
import PengantaranScreen from "./screens/Pengantaran/Pengantaran";
import RiwayatScreen from "./screens/Riwayat/Riwayat";
import OutletScreen from "./screens/Outlet/Outlet";
import ProfileScreen from "./screens/Profile/UserProfile";

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
  "Pengantaran",
  () => (props) =>
    (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GlobalProvider>
              <PengantaranScreen {...props} />
            </GlobalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  () => PengantaranScreen
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
    selectedIconColor: "#F3B33D",
    textColor: "#8a8a8a",
    selectedTextColor: "#F3B33D",
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

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: { name: "Pengantaran", id: "PENGANTARAN_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Order",
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
                text: "History",
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
                text: "Feed",
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
  Navigation.setRoot(enterApp);
});
