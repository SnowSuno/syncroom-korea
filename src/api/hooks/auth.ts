import { authApi, authClient } from "@/api/client/auth";
import { yamahaClient } from "@/api/client/yamaha";
import { useAuthStore } from "@/store/auth";
import { isErrorFromAlias } from "@zodios/core";

export const useAuth = () => {
  const setTokens = useAuthStore(state => state.setTokens);

  const login = async (credentials: { username: string; password: string }) => {
    try {
      const { key } = await authClient.getKey(credentials);
      const tokens = await yamahaClient.getToken({ queries: { key } });
      setTokens(tokens);
      return true;
    } catch (e) {
      if (isErrorFromAlias(authApi, "getKey", e) && e.response.status === 401)
        return false;
      throw e;
    }
  };

  return { login };
};
