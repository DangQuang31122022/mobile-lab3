import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import FirstScreen from "./screens/FirstScreen";
import Login2a from "./screens/Login2a";
import MOtA from "./screens/MotA";
import MotB from "./screens/MotB";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MotC from "./screens/MotC";
import MotD from "./screens/MotD";
import MotE from "./screens/MotE";
import XMEeye from "./screens/XMEeye";

const RootStack = createNativeStackNavigator({
  screens: {
    FirstScreen: FirstScreen,
    MotA: MOtA,
    MotB: MotB,
    MotC: MotC,
    MotD: MotD,
    MotE: MotE,
    Login2a: Login2a,
    XMEeye: XMEeye,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
