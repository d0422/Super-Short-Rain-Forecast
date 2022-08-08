import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "./api_key";
import { useState, useEffect } from "react";
import mapper from "./xymapper.json";
import axios from "axios";
export default function App() {
  var now = new Date();
  today =
    String(now.getFullYear()) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");
  const [ok, setOk] = useState(true);
  const [data, setData] = useState([]);
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
    path = location[0].region.concat(location[0].district);
    const y = mapper[path][0];
    const x = mapper[path][1];
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=0630&nx=${x}&ny=${y}`;
    axios
      .get(url)
      .then((result) => setData(result.data.response.body.items.item))
      .catch(() => {
        axios
          .get(
            `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=0630&nx=${x}&ny=${y}`
          )
          .then((result) => setData(result.data.response.body.items.item));
      });
  };

  getLocation();
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
