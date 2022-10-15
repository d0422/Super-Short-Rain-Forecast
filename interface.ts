import { StackScreenProps } from "@react-navigation/stack";
import { TextStyle } from "react-native";
import { ViewStyle } from "react-native";

export default interface Idata {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: number;
  nx: number;
  ny: number;
}
export interface IMakeData {
  LGT: string;
  PTY: string;
  REH: string;
  RN1: string;
  SKY: string;
  T1H: string;
  time: string;
}
export type IWeather =
  | "sunny-outline"
  | "cloudy-outline"
  | "cloudy"
  | "rainy-outline"
  | "rainandsnow"
  | "snow-outline";

export type RootStackParamList = {
  Home: undefined;
  Information: undefined;
  SetLocation: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;
export type InformationProps = StackScreenProps<
  RootStackParamList,
  "Information"
>;
export type SetLocationProps = StackScreenProps<
  RootStackParamList,
  "SetLocation"
>;

export interface styleType {
  loadingcontainer: ViewStyle;
  loading: TextStyle;
  container: ViewStyle;
  temperture: TextStyle;
  dossi: TextStyle;
  location: ViewStyle;
  hour: TextStyle;
  hours: ViewStyle;
  time: ViewStyle;
  hourcontainer: ViewStyle;
  reload: ViewStyle;
  info: TextStyle;
  comments: TextStyle;
  locationtext: TextStyle;
  locationtextver2: TextStyle;
  section: ViewStyle;
  touchIcon: ViewStyle;
  touchIconText: TextStyle;
  lists: ViewStyle;
  change: ViewStyle;
  si: ViewStyle;
  sitext: TextStyle;
}
