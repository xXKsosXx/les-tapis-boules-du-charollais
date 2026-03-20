"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { CartItem } from "@/lib/types";

interface CartContextType {
  item: CartItem | null;
  addItem: (item: CartItem) => void;
  removeItem: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  item: null,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

const CART_KEY = "tapis_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<CartItem | null>(null);

  // Charger depuis localStorage au mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem;
        // Vérifier si la réservation n'a pas expiré
        const expiresAt = new Date(parsed.expiresAt).getTime();
        if (expiresAt > Date.now()) {
          setItem(parsed);
        } else {
          localStorage.removeItem(CART_KEY);
        }
      } catch {
        localStorage.removeItem(CART_KEY);
      }
    }
  }, []);

  const addItem = (newItem: CartItem) => {
    setItem(newItem);
    localStorage.setItem(CART_KEY, JSON.stringify(newItem));
  };

  const removeItem = () => {
    setItem(null);
    localStorage.removeItem(CART_KEY);
  };

  const clearCart = () => {
    setItem(null);
    localStorage.removeItem(CART_KEY);
  };

  return (
    <CartContext.Provider value={{ item, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
