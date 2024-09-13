import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a Product
type Product = {
  name: string;
  price: number;
};

// Define the state type for Products
type ProductsState = {
  products: Product[];
};

// Initial state for the products list
const initialState: ProductsState = {
  products: [
    { name: 'Denim Jacket', price: 1200 },
    { name: 'Sweatpants', price: 900 },
    { name: 'Hoodie', price: 750 },
    { name: 'Dress Shirt', price: 540 },
    { name: 'Chinos', price: 680 },
    { name: 'Polo Shirt', price: 450 },
    { name: 'Cargo Shorts', price: 600 },
    { name: 'Leather Jacket', price: 2300 },
    { name: 'Blazer', price: 1700 },
    { name: 'Winter Coat', price: 2000 },
    { name: 'Cardigan', price: 800 },
    { name: 'Joggers', price: 550 },
  ],
};

// Create the products slice using Redux Toolkit
const productsSlice = createSlice({
  name: 'products',  // Name of the slice
  initialState,      // Initial state for the products
  reducers: {
    /**
     * Adds a new product to the list.
     * The action payload contains the product details.
     */
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    /**
     * Deletes a product from the list based on its index.
     * The action payload contains the index of the product to be deleted.
     */
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product, index) => index !== action.payload
      );
    },
  },
});

// Export the actions generated by the slice
export const { addProduct, deleteProduct } = productsSlice.actions;

// Export the reducer to be used in the store
export default productsSlice.reducer;
