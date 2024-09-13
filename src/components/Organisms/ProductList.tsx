import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native'; 
import ProductCart from '../Molecules/ProductCart';
type Product = {
  name: string;
  price: number;
};
type ProductListProps = {
  data: {name: string; price: number}[];
  onDelete: (item : Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({data, onDelete}) => (
  <FlatList
    data={data} // Reverse order to show latest product on top
    renderItem={({item, index}) => <ProductCart item={item} onDelete={ () => onDelete(item)} />}
    keyExtractor={(item, index) => index.toString()}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    ListHeaderComponent={() => <View style={styles.headerSpacing} />}
  />
);

const styles = StyleSheet.create({
  separator: {
    height: 36,
  },
  headerSpacing: {
    height: 60,
  },
});

export default ProductList;
