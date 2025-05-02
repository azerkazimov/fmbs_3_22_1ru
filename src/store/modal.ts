import { create } from "zustand";

export const useModalStore = create(set=>({
    isOper: false,
    setIsOpen: (isOpen: boolean) => set(() => ({ isOper: isOpen })),
}))