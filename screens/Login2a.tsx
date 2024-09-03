import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Login2a() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View>
      <Text>Login2a</Text>
    </View>
  );
}
