import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Information from "./pages/Information";
import SetLocation from "./pages/SetLocation";
import { RecoilRoot } from "recoil";
const Stack = createStackNavigator();
export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen
            name="Information"
            component={Information}
          ></Stack.Screen>
          <Stack.Screen
            name="SetLocation"
            component={SetLocation}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
