import { Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default {
  loadingcontainer: {
    backgroundColor: "#091F43",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 100,
    color: "white",
  },
  container: {
    backgroundColor: "#091F43",
    flex: 1,
  },
  temperture: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 80,
  },
  dossi: {
    fontFamily: "GmarketSansTTFMedium",
    fontSize: 30,
  },
  location: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
    fontSize: 30,
  },
  hour: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 20,
    backgroundColor: "#FF8C03",
    color: "white",
    padding: 10,
    borderRadius: 15,
    width: 65,
    textAlign: "center",
  },
  hours: {
    flex: 2,
  },
  time: {
    width: SCREEN_WIDTH,
    fontSize: 20,
  },
  hourcontainer: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 30,
  },
  reload: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 22,
  },
  info: {
    fontFamily: "GmarketSansTTFBold",
    fontSize: 20,
  },
  comments: {
    marginTop: 10,
    fontFamily: "GmarketSansTTFLight",
    fontSize: 18,
  },
  locationtext: {
    fontFamily: "GmarketSansTTFMedium",
    fontSize: 40,
    color: "white",
  },
  section: {},
  touchIcon: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  touchIconText: {
    fontFamily: "GmarketSansTTFLight",
    fontSize: 20,
    marginLeft: 5,
  },
};
