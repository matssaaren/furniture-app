import React, { useMemo, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  autoCapitalize = "none",
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showEye = !!secure;
  const secureTextEntry = secure ? !isPasswordVisible : false;

  const eyeSource = useMemo(() => {
    if (!showEye) return null;
    return isPasswordVisible
      ? require("@/assets/images/eye.png")
      : require("@/assets/images/eye_closed.png");
  }, [showEye, isPasswordVisible]);

  return (
    <View style={{marginBottom: 14,}}>
      <Text style={{fontSize: 12,
    fontWeight: "600",
    color: "#8D9BB5",
    marginBottom: 6,}}>
        {label}
    </Text>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8D9BB5",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8D9BB5"
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          style={{
            flex: 1,
    fontSize: 14,
    color: "#8D9BB5",
    paddingVertical: 0,
          }}
        />

        {showEye && (
          <Pressable
            onPress={() => setIsPasswordVisible((v) => !v)}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Näita või peida parool"
            style={{paddingLeft: 10,}}
          >
            <Image source={eyeSource!} style={{
                width: 18,
                height: 18,
                resizeMode: "contain",
            }} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
