import { ZodiosPlugin } from "@zodios/core";
import { useAuthStore } from "@/store/auth";

export const authorizationPlugin: ZodiosPlugin = {
  name: "authorization",
  request: async (_, config) => {
    const { token } = useAuthStore.getState();

    return token
      ? {
          headers: {
            Authorization: token,
            ...config.headers,
          },
          ...config,
        }
      : config;
  },
};
