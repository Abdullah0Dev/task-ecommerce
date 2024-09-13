import {StyleSheet, Text} from 'react-native';
import React from 'react';
type CustomTextProps = {
    target: 'name' | 'price';
    title: string,
};
const CustomText: React.FC<CustomTextProps> = ({title, target}) => {
  return (
    <Text style={target === 'name' ? styles.productName : styles.price}>
    {title}
  </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    fontWeight: '600', // Semi-bold font for product name
    color: '#000', // Black text color
    marginBottom: 8,
  },
  price: {
    backgroundColor: '#63b3ed', // Blue background for price
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#fff', // White text color for price
  },
});

 