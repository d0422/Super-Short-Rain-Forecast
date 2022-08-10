import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
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
  return (
    <View style={styles.weather}>
      <Ionicons name={weather} size={170} color="black" />
      <View style={styles.entire}>
        {one.PTY === "5" ? <Text style={styles.water}>소나기</Text> : null}
        {one.RN1 === "강수없음" ? (
          <View style={styles.container}>
            <MaterialCommunityIcons
              name="air-humidifier"
              size={30}
              color="black"
            />
            <Text style={styles.water}>{one.REH}%</Text>
          </View>
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
  container: { flexDirection: "row", alignItems: "center" },
  entire: {
    justifyContent: "center",
  },
});
export default Weather;
