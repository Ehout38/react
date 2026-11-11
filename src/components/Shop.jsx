import { createContext, useContext, useState } from 'react';

const ShopContext = createContext(null);

export default function Shop({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart(current => {
      const item = current.find(entry => entry.id === product.id);
      return item
        ? current.map(entry => entry.id === product.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
        : [...current, { ...product, quantity: 1 }];
    });
  }

  function clearCart() {
    setCart([]);
  }

  return <ShopContext.Provider value={{ cart, addProduct, clearCart }}>{children}</ShopContext.Provider>;
}

export function useShop() {
  return useContext(ShopContext);
}
