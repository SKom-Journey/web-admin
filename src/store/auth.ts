import { create } from "zustand";

interface LoginAdminStore {
    username: string,
    password: string,
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
}

export const useLoginAdminStore = create<LoginAdminStore>((set) => ({
    username: '',
    password: '',
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
}));