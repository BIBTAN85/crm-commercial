"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  toast: string;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size?: string, quantity?: number) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "mystery-jersey-cart";
const getKey = (item: CartItem) => `${item.slug}-${item.size}`;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addItem = (product: Product, size = "M", quantity = 1) => {
    setItems((current) => {
      const incoming: CartItem = { slug: product.slug, name: product.name, price: product.price, size, quantity };
      const key = getKey(incoming);
      const exists = current.find((item) => getKey(item) === key);
      if (exists) {
        return current.map((item) => (getKey(item) === key ? { ...item, quantity: item.quantity + quantity } : item));
      }
      return [...current, incoming];
    });
    setToast(`${product.name} ajoutée au panier`);
    setIsOpen(true);
  };

  const value = useMemo<CartContextValue>(() => ({
    items,
    isOpen,
    toast,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem: (key) => setItems((current) => current.filter((item) => getKey(item) !== key)),
    updateQuantity: (key, quantity) => setItems((current) => current.map((item) => getKey(item) === key ? { ...item, quantity: Math.max(1, quantity) } : item)),
    clearCart: () => setItems([]),
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    dismissToast: () => setToast(""),
  }), [items, isOpen, toast]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export const cartItemKey = getKey;
