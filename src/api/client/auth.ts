import { z } from "zod";

import { makeApi, Zodios } from "@zodios/core";

export const authApi = makeApi([
  {
    method: "post",
    path: "/login",
    alias: "getKey",
    parameters: [
      {
        name: "credentials",
        type: "Body",
        schema: z.object({
          username: z.string(),
          password: z.string(),
        }),
      },
    ],
    response: z.object({
      key: z.string(),
    }),
    errors: [
      {
        status: 401,
        schema: z.string(),
      },
    ],
  },
]);

export const authClient = new Zodios("https://auth.syncroom.link/api", authApi);
