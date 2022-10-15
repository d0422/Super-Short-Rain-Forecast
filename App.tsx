import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Information from "./pages/Information";
import SetLocation from "./pages/SetLocation";
import { RecoilRoot } from "recoil";
import { RootStackParamList } from "./interface";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  const [fontLoaded] = useFonts({
    GmarketSansTTFBold: require("./assets/fonts/GmarketSansTTFBold.ttf"),
    GmarketSansTTFMedium: require("./assets/fonts/GmarketSansTTFMedium.ttf"),
    GmarketSansTTFLight: require("./assets/fonts/GmarketSansTTFLight.ttf"),
  }); // 폰트 불러오기
  if (!fontLoaded) return <StatusBar></StatusBar>; // 폰트가 로딩되지 않는 경우
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
