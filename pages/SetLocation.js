import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import style from "./components/style";
import data from "../data/locationData.json";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useSetRecoilState } from "recoil";
import { LocationState } from "./components/Atom";
import { SafeAreaView } from "react-native-safe-area-context";
const SetLocation = ({ navigation }) => {
  const [si, setSi] = useState("");
  const [dong, setDong] = useState([]);
  const SI = Object.keys(data);
  const setLocationState = useSetRecoilState(LocationState);
  const setData = (d) => {
    setSi(d);
    setDong(data[d]);
  };
  const setLocationData = (d) => {
    setLocationState(si + " " + d);
    navigation.navigate("Home");
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.location}>
          <Text style={styles.locationtext}>위치 정하기</Text>
        </View>
        <ScrollView style={styles.hours}>
          {!si
            ? SI.map((d) => (
                <TouchableOpacity
                  style={styles.si}
                  onPress={() => {
                    setData(d);
                  }}
                  key={d}
                >
                  <Text style={styles.sitext}>{d}</Text>
                </TouchableOpacity>
              ))
            : null}
          {si
            ? dong &&
              dong.map((k) => (
                <TouchableOpacity
                  style={styles.si}
                  key={k}
                  onPress={() => {
                    setLocationData(k);
                  }}
                >
                  <Text style={styles.sitext}>{k}</Text>
                </TouchableOpacity>
              ))
            : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create(style);

export default SetLocation;
