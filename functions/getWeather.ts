import { IWeather } from "../interface";

export default function getWeather(one): IWeather {
  let weather: IWeather = "sunny-outline";
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
      // 진눈깨비 아직 못넣음
      // <MaterialCommunityIcons name="snowflake-melt" size={24} color="black" />
      break;
    case "3":
      weather = "snow-outline";
      // 눈
      break;
    case "5":
      weather = "rainy-outline";
      break;
    case "6":
      weather = "rainandsnow";
      // 진눈깨비 아직 못넣음
      // <MaterialCommunityIcons name="snowflake-melt" size={24} color="black" />
      break;
    case "7":
      weather = "snow-outline";
      break;
  }
  return weather;
}
