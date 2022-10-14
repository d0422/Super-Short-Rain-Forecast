export default function getComment(one, badnum:number) {
  let comment = "";
  const rain = parseInt(one.RN1.split("m")[0].split("~")[0]);
  if (badnum >= 75 && badnum <= 80) {
    comment = "조금 불쾌할 수 있어요.";
  } else if (badnum > 80) {
    comment = "많이 불쾌할 수 있어요";
  }
  if ((one.PTY == "1" || one.PTY == "5") && rain < 8.5) {
    if (comment.length > 0) {
      comment += "\n아, 그리고 ";
    }
    comment += "우산 챙기세요.";
  } else if (rain >= 8.5 && rain < 15) {
    if (comment.length > 0) {
      comment += "\n 그건 그렇고 ";
    }
    comment += "슬슬 우산도 의미없을거 같은데...";
  } else if (rain >= 15) {
    if (comment.length > 0) {
      comment += "\n근데 ";
    }
    comment += "저같으면 집에 있을 것 같아요.";
  }
  return comment;
}
