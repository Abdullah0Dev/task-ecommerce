import React from 'react';
import { StyleSheet , View} from 'react-native';
import CustomText from '../atoms/CustomText';
import Button from '../atoms/Button';

// Define the prop types for ProductCart
type ProductCartProps = {
  item: {
    name: string;
    price: number;
  };
  onDelete: (index: number) => void; // Function to handle the delete action
};

/**
 * ProductCart Component
 * A reusable component to display a product's information and a delete button
 */
const ProductCart: React.FC<ProductCartProps> = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      {/* Product Name */}
      <CustomText title={item.name} target="name" />
      {/* Price and Delete Button */}
      <View style={styles.row}>
        {/* Price */}
        <CustomText title={'$' + `${item.price}`} target="price" />
        {/* Delete Button */}
        <Button title="Delete" onPress={onDelete} target="delete" />
      </View>
    </View>
  );
};

// Define styles using StyleSheet for better performance and maintainability
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light grey background
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 24,
  }, 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  }, 
});

export default ProductCart;
