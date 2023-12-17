import { z } from "zod";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UsersStore {
  favorites: string[];
  addFavoriteUser: (user: string) => void;
  deleteFavoriteUser: (user: string) => void;
}
const getLegacyInitialUsers = () => {
  const persist = localStorage.getItem("persist:root");
  if (!persist) return [];

  console.log(JSON.parse(persist));

  try {
    const { user } = JSON.parse(persist);
    const { userList } = JSON.parse(user);

    const users = z.string().array().parse(userList);

    localStorage.removeItem("persist:root");

    return users;
  } catch (e) {
    return [];
  }
};

export const useUsersStore = create(
  persist<UsersStore>(
    set => ({
      favorites: getLegacyInitialUsers(),
      addFavoriteUser: user =>
        set(prev => ({ favorites: [...prev.favorites, user] })),
      deleteFavoriteUser: user =>
        set(prev => ({
          favorites: prev.favorites.filter(favorite => user !== favorite),
        })),
    }),
    { name: "users", storage: createJSONStorage(() => localStorage) },
  ),
);
