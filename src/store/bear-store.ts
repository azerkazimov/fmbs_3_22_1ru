import { create } from 'zustand'

interface BearState {
    bears: number;
}

interface BearActions {
    icreaceBears: () => void;
}

export const useStore = create<BearState & BearActions>(set => ({
    bears: 0,
    icreaceBears: () => set((state) => ({ bears: state.bears + 1 })),
    removeBears: () => set((state) => ({ bears: state.bears - 1 })),
    reset: () => set(() => ({ bears: 0 }))
}));


