import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      setAuth: (token) => set({ token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// only to see UI

// export const useAuthStore = create<AuthState>()((set) => ({
//   token: null,
//   user: null,
//   isAuthenticated: false,
//   setAuth: (token, user) => set({ token, user, isAuthenticated: true }),
//   logout: () => set({ token: null, user: null, isAuthenticated: false }),
// }));
