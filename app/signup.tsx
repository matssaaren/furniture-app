
import { StyleSheet, Text, View } from "react-native";
export default function Signup() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      
      <Text style={[styles.title]}>We'll Find You</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
});