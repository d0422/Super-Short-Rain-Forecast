function getTime() {
  const now = new Date();
  let time;
  if (now.getMinutes() < 45) {
    time = String(now.getHours() - 1).padStart(2, "0") + "45";
  } else {
    time = String(now.getHours()).padStart(2, "0") + "45";
  }
  return time;
}
export default getTime;
