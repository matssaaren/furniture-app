import React, { useState } from "react";

import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Input from "@/components/Input";

// Loo registreerimis- ja login-ekraan.
// Lisa väljad: nimi, e-mail, parool vastavlt disainile
// Loo Checkbox komponent ja lisa tabelile juurde
// Lisa sisselogimise nupp ja valikuliselt Google login
// Testi, kas andmete sisestus töötab (nt console.log).

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <KeyboardAvoidingView
      style={[styles.container]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.inner]}>
          <Input label="Name" placeholder="Jhon Doe" value={name} onChangeText={setName} />
          <Input label="Email" placeholder="example@mail.com" value={email} onChangeText={setEmail} />
          <Input
            label="Password"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secure
          />

        </View>

      </TouchableWithoutFeedback>
      

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
      flex: 1,
      // alignItems: "center",
      // backgroundColor: "white"
    },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
});