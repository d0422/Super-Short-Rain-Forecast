import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Weather = ({ one }) => {
  let weather = "";
  switch (one.PTY) {
    case "0":
      if (one.SKY === "1") {
        weather = "sunny-outline";
      } else if (one.SKY === "3") {
        weather = "cloudy-outline";
      } else if (one.SKY === "4") {
        weather = "cloudy";
      }
      break;
    case "1":
      weather = "rainy-outline";
      break;
    case "2":
      weather = "rainandsnow";
      break;
    // <MaterialCommunityIcons name="snowflake-melt" size={24} color="black" />
    case "3":
      weather = "snow-outline";
      break;
    case "5":
      weather = "rainy-outline";
      break;
    case "6":
      weather = "rainandsnow";
      break;
    // <MaterialCommunityIcons name="snowflake-melt" size={24} color="black" />
    case "7":
      weather = "snow-outline";
      break;
  }
  const badnum = Math.floor(
    0.81 * parseInt(one.T1H) +
      0.01 * parseInt(one.REH) * (0.99 * parseInt(one.T1H) - 14.3) +
      46.3
  );
  return (
    <View style={styles.weather}>
      <Ionicons name={weather} size={170} color="black" />
      <View style={styles.entire}>
        {one.PTY === "5" ? <Text style={styles.water}>소나기</Text> : null}
        {one.RN1 === "강수없음" ? (
          <>
            <View style={styles.container}>
              <MaterialCommunityIcons
                name="air-humidifier"
                size={30}
                color="black"
              />
              <Text style={styles.water}>{one.REH}%</Text>
            </View>
            <View style={styles.container}>
              <FontAwesome5 name="angry" size={24} color="black" />
              <Text style={styles.badnum}>{badnum}점</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.container}>
              <Ionicons name="water" size={30} color="black" />
              <Text style={styles.water}>{one.RN1}</Text>
            </View>
            <View style={styles.container}>
              <MaterialCommunityIcons
                name="air-humidifier"
                size={30}
                color="black"
              />
              <Text style={styles.water}>{one.REH}%</Text>
            </View>
            <View style={styles.container}>
              <FontAwesome5 name="angry" size={24} color="black" />
              <Text style={styles.badnum}>{badnum}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  weather: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  water: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 20,
  },
  badnum: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 20,
    color: "#FF1E42",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  entire: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Weather;
