// api데이터 가공
export default function HourlyWeather(data) {
  let t = {};
  let result = [];
  data.forEach((i) => {
    if (i.fcstDate + i.fcstTime in t) {
      if (i.category === "LGT") {
        //낙뢰
        t[i.fcstDate + i.fcstTime].LGT = i.fcstValue;
      } else if (i.category === "T1H") {
        //기온
        t[i.fcstDate + i.fcstTime].T1H = i.fcstValue;
      } else if (i.category === "RN1") {
        //1시간 강수량
        t[i.fcstDate + i.fcstTime].RN1 = i.fcstValue;
      } else if (i.category === "SKY") {
        //하늘상태
        t[i.fcstDate + i.fcstTime].SKY = i.fcstValue;
      } else if (i.category === "PTY") {
        t[i.fcstDate + i.fcstTime].PTY = i.fcstValue;
      } else if (i.category === "REH") {
        //습도
        t[i.fcstDate + i.fcstTime].REH = i.fcstValue;
      }
    } else {
      t[i.fcstDate + i.fcstTime] = {};
      if (i.category === "LGT") {
        //낙뢰
        t[i.fcstDate + i.fcstTime].LGT = i.fcstValue;
      } else if (i.category === "T1H") {
        //기온
        t[i.fcstDate + i.fcstTime].T1H = i.fcstValue;
      } else if (i.category === "RN1") {
        //1시간 강수량
        t[i.fcstDate + i.fcstTime].RN1 = i.fcstValue;
      } else if (i.category === "SKY") {
        //하늘상태
        t[i.fcstDate + i.fcstTime].SKY = i.fcstValue;
      } else if (i.category === "PTY") {
        t[i.fcstDate + i.fcstTime].PTY = i.fcstValue;
      } else if (i.category === "REH") {
        //습도
        t[i.fcstDate + i.fcstTime].REH = i.fcstValue;
      }
    }
  });
  Object.keys(t).forEach((key) => {
    t[key].time = key;
    result.push(t[key]);
  });
  return result;
}
