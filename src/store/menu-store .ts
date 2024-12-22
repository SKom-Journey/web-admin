import { create } from "zustand";

interface MenuStore {
  title: string;
  img: string;
  price: number | string;
  description: string;
  showField: boolean;
  toggleShowField: () => void;
  setTitle: (title: string) => void;
  setImg: (img: string) => void;
  setPrice: (price: number | string) => void;
  setDescription: (description: string) => void;
  resetForm: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  title: "",
  img: "",
  price: "",
  description: "",
  showField: false,
  toggleShowField: () => set((state) => ({ showField: !state.showField })),
  setTitle: (title) => set({ title }),
  setImg: (img) => set({ img }),
  setPrice: (price) => set({ price }),
  setDescription: (description) => set({ description }),
  resetForm: () => set({ title: "", img: "", price: "", description: "" })
}));