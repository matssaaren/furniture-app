import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color
}) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color}]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: 300,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
