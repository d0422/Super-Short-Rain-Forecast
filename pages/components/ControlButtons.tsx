import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import style from "./style";
import { useSetRecoilState } from "recoil";
import { LocationState } from "./Atom";
const ControlButtons = ({ navigation, getLocation }) => {
  const setLS = useSetRecoilState(LocationState);
  return (
    <View style={styles.reload}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Information");
        }}
      >
        <Ionicons name="information-circle-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getLocation();
        }}
      >
        <Ionicons name="reload" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLS("");
        }}
      >
        <MaterialIcons name="location-pin" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create(style);
export default ControlButtons;
