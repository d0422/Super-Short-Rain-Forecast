import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";
import { FontAwesome } from "@expo/vector-icons";
const Locations = ({ navigation, location }) => {
  return (
    <View style={styles.location}>
      <TouchableOpacity
        style={styles.change}
        onPress={() => {
          navigation.navigate("SetLocation");
        }}
      >
        <FontAwesome name="exchange" size={24} color="white" />
      </TouchableOpacity>
      {location.length > 8 ? (
        <Text style={styles.locationtextver2}>{location}</Text>
      ) : (
        <Text style={styles.locationtext}>{location}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create(style);
export default Locations;
