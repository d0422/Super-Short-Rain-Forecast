import axios from "axios";
import HourlyWeather from "./HourlyWeather";
//data
import mapper from "../data/xymapper.json";
import getToday from "./getToday";
import getTime from "./getTime";
import { API_KEY } from "../assets/api_key";

export default function getData(path) {
  const today = getToday();
  const time = getTime();
  const x = mapper[path][0];
  const y = mapper[path][1];
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}&nx=${x}&ny=${y}`;
  return axios
    .get(url)
    .then((result) => HourlyWeather(result.data.response.body.items.item))
    .catch((err) => {
      console.error(err);
    });
}
