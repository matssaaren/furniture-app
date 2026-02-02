import { Image, Text, View } from "react-native";
import Button from "./components/Button";
import Link from "./components/Link";
export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Image source={require('./splash-icon.png')}/>
      <Text>You'll Find</Text>
      <Text>All you need</Text>
      <Text>Here!</Text>
      <Button
        title="Sign up"
        onPress={() => console.log("FGGGGG")}
        color="#4F63AC"
      />
      <Link
        title="Sign in"
        onPress={() => console.log("Log")}
        color="#4F63AC"
      />
    </View>
  );
}
