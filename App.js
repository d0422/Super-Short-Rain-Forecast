import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "./api_key";
import { useState, useEffect } from "react";
import mapper from "./xymapper.json";
import axios from "axios";
import HourlyWeather from "./HourlyWeather";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  const [location, setLocation] = useState("");
  const [ok, setOk] = useState(true);
  const [data, setData] = useState([]);
  const now = new Date();
  let time;
  const today =
    String(now.getFullYear()) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");
  if (now.getMinutes < 45) {
    time = String(now.getHours() - 1) + "45";
  } else {
    time = String(now.getHours()) + "45";
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
  };
  useEffect(() => {
    getLocation();
  }, []);
  const result = HourlyWeather(data);
  console.log(result);
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <StatusBar style="auto" />
      <ScrollView style={styles.hours} horizontal pagingEnabled>
        {result.map((one) => (
          <View key={one.time} style={styles.hour}>
            <Text>{one.time}</Text>
            <Text>
              {one.SKY == 1 ? "맑음" : one.SKY == 3 ? "구름많음" : "흐림"}
            </Text>
            <Text>강수량 : {one.RN1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  location: {
    flex: 0.5,
    fontSize: 30,
  },
  hours: {
    borderTopColor: "black",
    borderTopWidth: 10,
    flex: 2,
    fontSize: 20,
  },
  hour: {
    width: SCREEN_WIDTH,
  },
});
