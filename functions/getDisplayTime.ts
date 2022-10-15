export default function getDisplayTime(string: string) {
  const result = string.substring(8, 10) + "시";
  return result;
}
