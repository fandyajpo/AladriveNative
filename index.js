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
import HistoryScreen from "./screens/History";
import ProfileScreen from "./screens/Profile/Profile";
import MerchantStatusScreen from "./screens/MerchantStatus";
import CameraScreen from "./screens/Camera";
import CommentScreen from "./screens/SeeComment";
import OrderDetailScreen from "./screens/OrderDetail";

//SETTING GROUP SCREEN
import SettingScreen from "./screens/Settings/Setting";
import TaxAndService from "./screens/Settings/TaxAndService";
import DebitBankScreen from "./screens/Settings/DebitBank";
import BiayaTakeawayScreen from "./screens/Settings/BiayaTakeaway";
import LanguageScreen from "./screens/Settings/Language";
import PrinterScreen from "./screens/Settings/Printer";
import AddPrinterScreen from "./screens/Settings/AddPrinter";

//PROFILE UDPDATE GROUP SCREEN
import EditProfileScreen from "./screens/Profile/EditProfile";
import UpdateOutletCategoryScreen from "./screens/Profile/UpdateOutletCategory";
import UpdateAlamatScreen from "./screens/Profile/UpdateAlamat";
import UpdateOperasionalScreen from "./screens/Profile/UpdateJamOperasi";
import UpdateGaleryScreen from "./screens/Profile/UpdateGalery";
import TipeServisDanTipeBayarScreen from "./screens/Profile/TipeServisDanTipeBayar";

//REGISTER SCREEN
import RegisterPage from "./screens/Register";

//AUTH GROUP SCREEN
import OtpScreen from "./screens/Auth/Otp";
import ConfirmPinScreen from "./screens/Auth/ConfirmPin";
import DaftarOutletScreen from "./screens/Auth/Daftar";

Navigation.registerComponent(
  "DaftarOutlet",
  () => (props) =>
    (
      // <SheetProvider>
      <GlobalProvider>
        <DaftarOutletScreen {...props} />
      </GlobalProvider>
      // </SheetProvider>
    ),
  () => DaftarOutletScreen
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
  "Register",
  () => (props) =>
    (
      <GlobalProvider>
        <RegisterPage {...props} />
      </GlobalProvider>
    ),
  () => RegisterPage
);

Navigation.registerComponent(
  "UpdateOperasional",
  () => (props) =>
    (
      <SheetProvider>
        <GlobalProvider>
          <UpdateOperasionalScreen {...props} />
        </GlobalProvider>
      </SheetProvider>
    ),
  () => UpdateOperasionalScreen
);

Navigation.registerComponent(
  "UpdateAlamatOutlet",
  () => (props) =>
    (
      <SheetProvider>
        <GlobalProvider>
          <UpdateAlamatScreen {...props} />
        </GlobalProvider>
      </SheetProvider>
    ),
  () => UpdateAlamatScreen
);

Navigation.registerComponent(
  "UpdateOutletCategory",
  () => (props) =>
    (
      <SheetProvider>
        <GlobalProvider>
          <UpdateOutletCategoryScreen {...props} />
        </GlobalProvider>
      </SheetProvider>
    ),
  () => UpdateOutletCategoryScreen
);

Navigation.registerComponent(
  "EditProfile",
  () => (props) =>
    (
      <GlobalProvider>
        <EditProfileScreen {...props} />
      </GlobalProvider>
    ),
  () => EditProfileScreen
);

Navigation.registerComponent(
  "Setting",
  () => (props) =>
    (
      <GlobalProvider>
        <SettingScreen {...props} />
      </GlobalProvider>
    ),
  () => SettingScreen
);

Navigation.registerComponent(
  "Printer",
  () => (props) =>
    (
      <GlobalProvider>
        <PrinterScreen {...props} />
      </GlobalProvider>
    ),
  () => PrinterScreen
);

Navigation.registerComponent(
  "TaxAndService",
  () => (props) =>
    (
      <GlobalProvider>
        <TaxAndService {...props} />
      </GlobalProvider>
    ),
  () => TaxAndService
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
  "Order",
  () => (props) =>
    (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GlobalProvider>
              <HomeScreen {...props} />
            </GlobalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  () => HomeScreen
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
                component: { name: "Order", id: "ORDER_SCREEN" },
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
                component: { name: "History", id: "HISTORY_SCREEN" },
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
                component: { name: "Feed", id: "FEED_SCREEN" },
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
                component: { name: "Promo", id: "PROMO_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Promo",
                icon: require("./assets/icons/25/user.png"),
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
            name: "MerchantStatus",
            passProps: {
              text: "Merchant status screen",
            },
          },
        },
        {
          component: {
            name: "Camera",
            passProps: {
              text: "Camera screen",
            },
          },
        },
        {
          component: {
            name: "Followers",
            passProps: {
              text: "Followers screen",
            },
          },
        },
        {
          component: {
            name: "Comment",
            passProps: {
              text: "Followers screen",
            },
          },
        },
        {
          component: {
            name: "Setting",
            passProps: {
              text: "Setting screen",
            },
          },
        },
        {
          component: {
            name: "TaxAndService",
            passProps: {
              text: "Manage tax and service screen",
            },
          },
        },
        {
          component: {
            name: "DebitBank",
            passProps: {
              text: "Manage tax and service screen",
            },
          },
        },
        {
          component: {
            name: "BiayaTakeaway",
            passProps: {
              text: "Manage biaya takeaway screen",
            },
          },
        },
        {
          component: {
            name: "Language",
            passProps: {
              text: "Manage bahasa screen",
            },
          },
        },
        {
          component: {
            name: "EditProfile",
            passProps: {
              text: "Edit merchant profile screen",
            },
          },
        },
        {
          component: {
            name: "UpdateOutletCategory",
            passProps: {
              text: "Update outlet category screen",
            },
          },
        },
        {
          component: {
            name: "UpdateAlamatOutlet",
            passProps: {
              text: "Update outlet category screen",
            },
          },
        },
        {
          component: {
            name: "UpdateOperasional",
            passProps: {
              text: "Update jam operasional screen",
            },
          },
        },
        {
          component: {
            name: "UpdateGalery",
            passProps: {
              text: "Update galery screen",
            },
          },
        },
        {
          component: {
            name: "TipeServisDanTipeBayar",
            passProps: {
              text: "Available service type screen",
            },
          },
        },
        {
          component: {
            name: "AddPrinter",
            passProps: {
              text: "Add printer screen",
            },
          },
        },
        {
          component: {
            name: "Member",
            passProps: {
              text: "Member screen",
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
            name: "Register",
            options: {
              statusBar: {
                drawBehind: true,
                backgroundColor: "transparent",
                animate: false,
              },
            },
          },
        },
        {
          component: {
            name: "Login",
            options: {
              statusBar: {
                drawBehind: true,
                backgroundColor: "transparent",
                animate: false,
              },
            },
          },
        },
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
  //set token at ./Auth/login.js

  Navigation.setRoot(isLoggedIn() ? mainRoot : enterApp);
});
