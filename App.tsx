import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./components/FirstScreen";
import Login2a from "./components/Login2a";
import MOtA from "./components/MotA";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="MotA" component={MOtA} />
        <Stack.Screen name="Login 2a" component={Login2a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
