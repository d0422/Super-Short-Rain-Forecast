function getToday() {
  const now = new Date();
  const today =
    String(now.getFullYear()) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");
  return today;
}
export default getToday;
