import { create } from "zustand";

interface MenuStore {
  title: string;
  img: string;
  price: string | number;
  description: string;
  showField: boolean;
  editMenu: { id: string, title: string; img: string; price: string | number; description: string } | null;
  toggleShowField: () => void;
  setTitle: (title: string) => void;
  setImg: (img: string) => void;
  setPrice: (price: string | number) => void;
  setDescription: (description: string) => void;
  resetForm: () => void;
  setEditMenu: (menu: { id: string, title: string; img: string; price: string | number; description: string }) => void;
  clearEditMenu: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  title: "",
  img: "",
  price: "",
  description: "",
  showField: false,
  editMenu: null,
  toggleShowField: () => set((state) => ({ showField: !state.showField })),
  setTitle: (title) => set({ title }),
  setImg: (img) => set({ img }),
  setPrice: (price) => set({ price }),
  setDescription: (description) => set({ description }),
  resetForm: () => set({ title: "", img: "", price: "", description: "" }),
  
  setEditMenu: (menu) => set({
    title: menu.title,
    img: menu.img,
    price: menu.price,
    description: menu.description,
    showField: true,
    editMenu: menu, 
  }),

  clearEditMenu: () => set({
    editMenu: null,
    title: "",
    img: "",
    price: "",
    description: "",
  })
}));