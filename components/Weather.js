import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
const Weather = ({ one }) => {
  return (
    <View style={styles.weather}>
      {one.SKY == 1 ? (
        <Ionicons name="sunny-outline" size={170} color="black" />
      ) : one.SKY == 3 ? (
        <Ionicons name="cloudy-outline" size={170} color="black" />
      ) : (
        <Ionicons name="rainy-outline" size={170} color="black" />
      )}
      <Text>강수량 : {one.RN1}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  weather: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
export default Weather;
