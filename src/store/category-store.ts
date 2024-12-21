import { create } from "zustand";

interface CategoryStore {
    categoryName: string,
    editedCategoryName: string,
    showField: boolean;
    editSelectedCategoryId: string | null;
    setCategoryName: (categoryName: string) => void;
    setEditedCategoryName: (categoryName: string) => void;
    toggleShowField: () => void;
    setEditSelectedCategoryId: (editSelectedCategoryId: string | null) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    categoryName: '',
    editedCategoryName: '',
    showField: false,
    editSelectedCategoryId: '',
    setCategoryName: (categoryName) => set({ categoryName }),
    setEditedCategoryName: (editedCategoryName: string) => set({ editedCategoryName }),
    toggleShowField: () => set((state) => ({ showField: !state.showField })),
    setEditSelectedCategoryId: (editSelectedCategoryId: string | null) => set({ editSelectedCategoryId }),
}));