import Button from "@/components/Button";
import Link from "@/components/Link";

import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const router = useRouter();


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Image source={require('@/assets/images/splash-icon.png')}/>
      <Text style={[styles.title]}>You'll Find</Text>
      <Text style={[styles.title, {color: "orange", textDecorationLine: "underline"} ]}>All you need</Text>
      <Text style={[styles.title]}>Here!</Text>
      <Button
        title="Sign up"
        onPress={() => router.navigate("/signup")}
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

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
});