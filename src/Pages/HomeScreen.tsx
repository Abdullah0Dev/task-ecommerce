import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {addProduct, deleteProduct} from '../store/productsSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductTemplate from '../components/Templates/ProductTemplate';

// Define the type for the product item
type Product = {
  name: string;
  price: number;
};

const HomeScreen: React.FC = () => {
  // Get the list of products from the Redux store
  const products = useSelector((state: RootState) => state.products.products);

  // Local state to hold the name of the new product to be added
  const [productName, setProductName] = useState<string>('');

  const dispatch = useDispatch();

  /**
   * Adds a new product with a random price to the list
   * Utilizes useCallback to avoid recreating the function on every render
   */
  const handleAddProduct = useCallback(() => {
    if (productName !== '') {
      const newProduct: Product = {
        name: productName,
        price: Math.floor(Math.random() * 1000), // Generate a random price
      };

      dispatch(addProduct(newProduct)); // Dispatch action to add product
      setProductName(''); // Clear input field after adding the product
    }
  }, [dispatch, productName]);

  /**
   * Deletes a product from the list by finding its original index
   * Utilizes useCallback to prevent unnecessary re-renders
   */
  const handleDeleteProduct = useCallback(
    (item: Product) => {
      // Find the original index of the product in the non-reversed array
      const originalIndex = products.findIndex(
        product => product.name === item.name && product.price === item.price,
      );
      if (originalIndex !== -1) {
        dispatch(deleteProduct(originalIndex)); // Dispatch action to delete the product
      }
    },
    [dispatch, products],
  );

  /**
   * Memoize the products array to optimize rendering
   * Ensures that the products are only recalculated when they change
   */
  const memoizedProducts = useMemo(() => products, [products]);

  return (
    <SafeAreaView style={styles.container}>
      <ProductTemplate
        data={memoizedProducts.slice().reverse()}
        handleChangeText={setProductName}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct} // change this in the previous screens to make it works!
        productName={productName}
      />
    </SafeAreaView>
  );
};

// Define styles using StyleSheet for better performance and readability
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;
