import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  token?: string;
  refreshToken?: string;
  setTokens: (credentials: { token: string; refreshToken: string }) => void;
  refreshTokens: () => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      token: undefined,
      refreshToken: undefined,
      setTokens: tokens => set(tokens),
      refreshTokens: () => {
        /* TODO */
      },
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) },
  ),
);
