import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

interface LinkProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color: string;
}

const Link: React.FC<LinkProps> = ({
  title,
  onPress,
  color
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text style={[styles.text, { color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Link;
