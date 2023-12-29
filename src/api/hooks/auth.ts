import { useMutation } from "react-query";
import { login } from "@/api/endpoints/auth";

export const useAuth = () =>
  useMutation<
    {
      token: string;
      refreshToken: string;
    },
    unknown,
    {
      username: string;
      password: string;
    }
  >(({ username, password }) => login(username, password));
