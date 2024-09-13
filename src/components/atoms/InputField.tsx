import React from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';

// Define the prop types for InputField
type InputFieldProps = {
  value: string; // The value of the input field
  title: string; // The label/title displayed above the input
  handleChangeText: (text: string) => void; // Function to handle text changes
} & TextInputProps; // Spread operator to allow additional TextInput props

/**
 * InputField Component
 * A reusable input field component with animation and custom styling
 */
const InputField: React.FC<InputFieldProps> = ({
  value,
  title,
  handleChangeText,
  ...props // Allow additional props to be passed to the TextInput
}) => {
  return (
    <View style={styles.container}>
      {/* Title/Label for the input field */}
      <Text style={styles.title}>{title}</Text>

      {/* Animated container for the TextInput */}
      <Animated.View style={styles.inputContainer}>
        {/* The TextInput itself */}
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder="Product Name" // Default placeholder
          onChangeText={handleChangeText} // Trigger callback when text changes
          placeholderTextColor={'#D0D0D0'} // Set placeholder text color
          {...props} // Spread additional props (like secureTextEntry, etc.)
        />
      </Animated.View>
    </View>
  );
};

// Define styles using StyleSheet for better performance and maintainability
const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // Space between input fields
  },
  title: {
    fontSize: 16,
    color: '#6c757d', // Use a consistent color for secondary text
    marginLeft: 16,
    marginBottom: 4,
    fontWeight: '500', // Medium font weight for the title
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    height: 72,
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light transparent background
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000', // Text color
  },
});

export default InputField;
