import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import getWeather from "../functions/getWeather";
import getComment from "../functions/getComment";
const Weather = ({ one }) => {
  const weather = getWeather(one);
  const badnum = Math.floor(
    0.81 * parseInt(one.T1H) +
      0.01 * parseInt(one.REH) * (0.99 * parseInt(one.T1H) - 14.3) +
      46.3
  );
  const comment = getComment(one, badnum);
  return (
    <View style={styles.weather}>
      <Ionicons name={weather} size={170} color="black" />
      <View style={styles.entire}>
        {one.PTY === "5" ? <Text style={styles.water}>소나기</Text> : null}
        {one.RN1 === "강수없음" ? (
          <View style={styles.flexbox}>
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
          </View>
        ) : (
          <View style={styles.flexbox}>
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
          </View>
        )}
      </View>
      <Text style={styles.comments}>{comment}</Text>
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
  flexbox: {
    flexDirection: "row",
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
    marginLeft: 10,
    marginRight: 10,
  },
  entire: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  comments: {
    marginTop: 10,
    fontFamily: "GmarketSansTTFLight",
    fontSize: 30,
  },
});
export default Weather;
