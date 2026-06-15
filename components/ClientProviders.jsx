"use client";

import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function ClientProviders({ children }) {
  return (
    <Provider store={store}>
      <CartProvider>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </CartProvider>
    </Provider>
  );
}
