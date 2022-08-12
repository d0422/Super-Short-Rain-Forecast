import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "../assets/api_key";
import { useState, useEffect } from "react";
import mapper from "../xymapper.json";
import axios from "axios";
import { useFonts } from "expo-font";
import Weather from "./components/Weather";
import getTime from "../functions/getTime";
import getToday from "../functions/getToday";
import HourlyWeather from "../functions/HourlyWeather";
import { Ionicons } from "@expo/vector-icons";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function Home({ navigation }) {
  const [location, setLocation] = useState(""); //장소
  const [ok, setOk] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [loaded] = useFonts({
    GmarketSansTTFBold: require("../assets/fonts/GmarketSansTTFBold.ttf"),
    GmarketSansTTFMedium: require("../assets/fonts/GmarketSansTTFMedium.ttf"),
    GmarketSansTTFLight: require("../assets/fonts/GmarketSansTTFLight.ttf"),
  });
  // 폰트 불러오기
  const today = getToday();
  const time = getTime();
  function getDisplayTime(string) {
    const result = string.substring(8, 10) + "시";
    return result;
  }
  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setLocation(location[0].region.concat(" " + location[0].district));
    path = location[0].region.concat(location[0].district);
    const x = mapper[path][0];
    const y = mapper[path][1];
    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}&nx=${x}&ny=${y}`;
    console.log(url);
    axios
      .get(url)
      .then((result) => setData(result.data.response.body.items.item))
      .catch(() => {
        console.log("오류");
      });
    setLoading(false);
  };
  useEffect(() => {
    getLocation();
  }, []);
  const result = HourlyWeather(data);
  if (!loaded) {
    return <StatusBar></StatusBar>;
  }
  return isLoading ? (
    <View style={styles.loadingcontainer}>
      <Text style={styles.loading}>로딩중...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text
          style={{
            fontFamily: "GmarketSansTTFMedium",
            fontSize: 40,
            color: "white",
          }}
        >
          {location}
        </Text>
      </View>
      <StatusBar style="white" />
      <View style={styles.reload}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Information");
          }}
        >
          <Ionicons name="information-circle-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            getLocation();
          }}
        >
          <Ionicons name="reload" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.hours} horizontal pagingEnabled>
        {result.map((one) => (
          <View key={one.time} style={styles.time}>
            <View style={styles.hourcontainer}>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.hour}>{getDisplayTime(one.time)}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.temperture}>{one.T1H}</Text>
                <Text style={styles.dossi}>℃</Text>
              </View>
              <Weather one={one}></Weather>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingcontainer: {
    backgroundColor: "#091F43",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 100,
    color: "white",
  },
  container: {
    backgroundColor: "#091F43",
    flex: 1,
  },
  temperture: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 80,
  },
  dossi: {
    fontFamily: "GmarketSansTTFMedium",
    fontSize: 30,
  },
  location: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
    fontSize: 30,
  },
  hour: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 20,
    backgroundColor: "#FF8C03",
    color: "white",
    padding: 10,
    borderRadius: 15,
    width: 65,
    textAlign: "center",
  },
  hours: {
    flex: 2,
  },
  time: {
    width: SCREEN_WIDTH,
    fontSize: 20,
  },
  hourcontainer: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 30,
  },
  reload: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 22,
  },
});
