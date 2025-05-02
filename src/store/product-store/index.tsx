import { ProductCardProps } from "@/types/interfaces/product-card-props";
import { create } from "zustand";

interface CardItem extends ProductCardProps {
  quantity: number;
}

interface CardStore {
  card: CardItem[];
  addToCard: (item: CardItem) => void;
  removeFromCard: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCard: () => void;
}

const useCardStore = create<CardStore>((set) => ({
  card: [],

  addToCard: (newItem) =>
    set((state) => {
      const existingIndex = state.card.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingIndex !== -1) {
        const updatedCard = [...state.card];
        updatedCard[existingIndex] = {
          ...updatedCard[existingIndex],
          quantity: updatedCard[existingIndex].quantity + 1,
        };
        return { card: updatedCard };
      } else {
        return { card: [...state.card, { ...newItem, quantity: 1 }] };
      }
    }),

  removeFromCard: (id) =>
    set((state) => ({
      card: state.card.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      card: state.card.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  clearCard: () => set({ card: [] }),
}));

export default useCardStore;
