import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (index: any) => void;
  disabled?: boolean;
  otherStyle?: StyleProp<ViewStyle>;
  target: 'addProduct' | 'delete';
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  otherStyle,
  target,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      target === 'addProduct' ? styles.addButton : styles.deleteButton,
      otherStyle,
    ]}>
    <Text
      style={
        target === 'addProduct' ? styles.addButtonText : styles.deleteButtonText
      }>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#e53e3e', // Red background for delete button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#fff', // White text color for delete button
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#007bff',
    marginHorizontal: 20,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;

// onPress
// style
// disabled
