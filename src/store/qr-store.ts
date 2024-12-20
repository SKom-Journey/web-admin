import { create } from "zustand";

interface QrStore {
  tableNumber: string;
  setTableNumber: (tableNumber: string) => void;
  showField: boolean;
  toggleShowField: () => void;
  qrDetails: string | null;
  setQrDetails: (details: string | null) => void;
}

export const useQrStore = create<QrStore>((set) => ({
  tableNumber: '',
  setTableNumber: (tableNumber) => set({ tableNumber }),
  showField: false,
  toggleShowField: () => set((state) => ({ showField: !state.showField })),
  qrDetails: null,
  setQrDetails: (details) => set({ qrDetails: details }),
}));