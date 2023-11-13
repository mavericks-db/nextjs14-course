import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
import { create } from "zustand";

export const userStore = create((set) => ({
    user: {
        firstName: "lorem"
    },
    updateUser: (newUser: any) => set((state: any) => {
        return ({ user: { ...state.user, ...newUser } })
    }
    ),
    fetchUser: async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        set({ user: data })
    }
}))