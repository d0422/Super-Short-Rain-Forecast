import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import style from "./components/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
const Information = ({ navigation }) => {
  const link = (t) => {
    if (t === "기상청") {
      Linking.openURL("https://www.weather.go.kr/w/image/vshrt/rain.do");
    } else if (t === "insta") {
      Linking.openURL("https://www.instagram.com/_0422/");
    } else if (t === "mail") {
      Linking.openURL(`matilto:rlfehd2013@naver.com`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text style={styles.locationtext}>APP정보</Text>
      </View>
      <View style={styles.hourcontainer}>
        <View style={styles.section}>
          <Text style={{ ...styles.info, fontSize: 40 }}>API정보</Text>
          <Text style={styles.info}>기상청 초단기 예보조회</Text>
          <Text style={styles.comments}>
            기상청의 6시간짜리 초단기 예보조회를 사용하여 해당 지역의 가장
            정확한 기상정보를 받아옵니다.
          </Text>
          <Text style={styles.comments}>추가적인 코멘트도 제공합니다!</Text>
          <TouchableOpacity
            style={styles.touchIcon}
            onPress={() => {
              link("기상청");
            }}
          >
            <MaterialCommunityIcons
              name="weather-hurricane"
              size={25}
              color="black"
            />
            <Text style={styles.touchIconText}>기상청 바로가기</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <View style={styles.section}>
          <Text
            style={{
              ...styles.info,
              fontSize: 40,
              marginBottom: 5,
              marginTop: 20,
            }}
          >
            만든사람
          </Text>
          <Text style={styles.info}>이동길</Text>
          <TouchableOpacity
            style={style.touchIcon}
            onPress={() => {
              link("insta");
            }}
          >
            <MaterialCommunityIcons name="instagram" size={24} color="black" />
            <Text style={styles.touchIconText}>_0422</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchIcon}
            onPress={() => {
              link("mail");
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <Text style={styles.touchIconText}>rlfehd2013@naver.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create(style);

export default Information;
