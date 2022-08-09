import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
const Weather = ({ one }) => {
  return (
    <View style={styles.weather}>
      <Text>
        {one.SKY == 1 ? (
          <Ionicons name="sunny-outline" size={150} color="black" />
        ) : one.SKY == 3 ? (
          <Ionicons name="cloudy-outline" size={150} color="black" />
        ) : (
          <Ionicons name="rainy-outline" size={150} color="black" />
        )}
      </Text>
      <Text>강수량 : {one.RN1}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  weather: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
});
export default Weather;
