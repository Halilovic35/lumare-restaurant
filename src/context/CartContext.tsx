import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 