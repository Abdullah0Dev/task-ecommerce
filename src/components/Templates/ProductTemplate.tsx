import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductList from '../Organisms/ProductList'; 
import Button from '../atoms/Button';
import InputField from '../atoms/InputField';
type Product = {
  name: string;
  price: number;
};
type ProductTemplateProps = {
  productName: string; 
  onAddProduct: () => void;
  onDeleteProduct: (item: Product) => void;
  handleChangeText: (text: string) => void; // Function to handle text changes
  data: {name: string; price: number}[];
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  productName, 
  onAddProduct,
  onDeleteProduct,
  data,
  handleChangeText,
}) => (
  <View style={styles.container}>
    <InputField
      value={productName}
      title="Product Name"
      handleChangeText={handleChangeText}
    />
    <Button
      title="Add Product"
      disabled={productName === ''}
      otherStyle={productName === '' && styles.disabledButton}
      onPress={onAddProduct}
      target="addProduct"
    />
    {/* product list */}
    <ProductList data={data} onDelete={onDeleteProduct} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  disabledButton: {
    backgroundColor: '#cccccc', // Grey out button when disabled
    opacity: 0.6,
  },
});

export default ProductTemplate;
