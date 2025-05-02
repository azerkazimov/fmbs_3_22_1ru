import { create } from "zustand";
import { ProductCardProps } from "@/types/interfaces/product-card-props";

interface CardItem extends ProductCardProps {
  quantity: number;
  id: number;
}

interface CardStore {
  card: CardItem[];
  addToCard: (item: ProductCardProps) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCard: (id: number) => void;
  clearCard: () => void;
}

const useCardStore = create<CardStore>((set) => ({
  card: [],

  addToCard: (newItem) =>
    set((state) => {
      const existingItemIndex = state.card.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedCard = [...state.card];
        updatedCard[existingItemIndex] = {
          ...updatedCard[existingItemIndex],
          quantity: updatedCard[existingItemIndex].quantity + 1,
        };
        return { card: updatedCard };
      } else {
        return {
          card: [...state.card, { ...newItem, quantity: 1 }],
        };
      }
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCard = state.card.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return { card: updatedCard };
    }),
  clearCard: () => set({ card: [] }),
  removeFromCard: (id: number) =>
    set((state) => ({
      card: state.card.filter((item) => item.id !== id),
    })),
}));

export default useCardStore;
