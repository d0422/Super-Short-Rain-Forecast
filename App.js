import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "./api_key";
import { useState, useEffect } from "react";
import mapper from "./xymapper.json";
export default function App() {
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
    console.log(x, y);
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220807&base_time=0630&nx=${x}&ny=${y}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myjson) {
        console.log(JSON.stringify(myjson));
      })
      .catch(() => {
        console.log("오류남ㅋㅋ");
        console.log(url);
      });
    setData(json.body.items.item);
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
