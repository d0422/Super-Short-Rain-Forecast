export default function getComment(one, badnum) {
  let comment = "";
  const rain = parseInt(one.RN1.split("m")[0]);
  if (badnum >= 75 && badnum <= 80) {
    comment = "조금 불쾌할 수 있어요.";
  } else if (badnum > 80 || rain >= 15) {
    comment = "저 같으면 집에 있겠어요.";
  }
  if (one.PTY == "1" || one.PTY == "5" || rain < 8.5) {
    if (comment.length > 0) {
      comment += " 글고 ";
    }
    comment += "우산 챙기세요.";
  } else if (rain >= 8.5 && rain < 15) {
    if (comment.length > 0) {
      comment += " 그건 그렇고 ";
    }
    comment += "슬슬 우산도 의미없을거 같은데...";
  }
  return comment;
}
