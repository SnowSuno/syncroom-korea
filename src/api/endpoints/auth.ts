import { auth, syncroom } from "@/common/axios";

export const login = async (username: string, password: string) => {
  const {
    data: { key },
  } = await auth.post<{
    key: string;
  }>("/login", { username, password });

  const credentials = await syncroom.get<{
    token: string;
    refreshToken: string;
  }>("/token", {
    params: { key },
  });

  return credentials.data;
};
