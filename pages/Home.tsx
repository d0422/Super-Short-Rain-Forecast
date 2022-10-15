import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

import { API_KEY } from "../assets/api_key";

//components
import Weather from "./components/Weather";
import { LocationState } from "./components/Atom";
import style from "./components/style";
import Loading from "./Loading";
import Locations from "./components/Locations";
import ControlButtons from "./components/ControlButtons";
//functions
import getTime from "../functions/getTime";
import getToday from "../functions/getToday";
import getDisplayTime from "../functions/getDisplayTime";
import HourlyWeather from "../functions/HourlyWeather";
import { HomeScreenProps, IMakeData } from "../interface";
import getLocationData from "../functions/getLocationData";
import { useQuery } from "@tanstack/react-query";
import getData from "../functions/apis";
interface Iprops {
  data: IMakeData[];
  isLoading: boolean;
}
export default function Home({ navigation }: HomeScreenProps) {
  const [defaultLocation, setDefaultLocation] = useRecoilState(LocationState);
  const { data: locationDatas } = useQuery(
    ["locationdata", defaultLocation],
    () => getLocationData(defaultLocation)
  ); //위치정보 받아오기
  const { data, isLoading: isDataLoading }: Iprops = useQuery(
    ["data", defaultLocation],
    () => getData(locationDatas[0]),
    {
      enabled: !!locationDatas,
    }
  ); //받아온 위치를 기반으로 날씨 받아오기
  return (
    <>
      {isDataLoading ? (
        <SafeAreaView style={styles.loadingcontainer}>
          <Loading />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <Locations navigation={navigation} location={locationDatas[1]} />
          <ControlButtons
            navigation={navigation}
            getLocation={setDefaultLocation}
          />
          <ScrollView style={styles.hours} horizontal pagingEnabled>
            {data.map((one) => (
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
        </SafeAreaView>
      )}
    </>
  );
}
const styles = StyleSheet.create(style);
