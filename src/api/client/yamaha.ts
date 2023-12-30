import { z } from "zod";

import { makeApi, Zodios } from "@zodios/core";
import { roomSchema } from "@/schema";
import { ZodiosHooks } from "@zodios/react";
import { authorizationPlugin } from "@/api/plugins/auth";

export const yamahaApi = makeApi([
  {
    method: "get",
    path: "/public/room_list",
    alias: "getRooms",
    parameters: [
      {
        name: "realm",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "pagesize",
        type: "Query",
        schema: z.number().optional(),
      },
    ],
    response: z.object({
      rooms: z.array(roomSchema),
    }),
  },
  {
    method: "get",
    path: "/token",
    alias: "getToken",
    parameters: [
      {
        name: "key",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.object({
      token: z.string(),
      refreshToken: z.string(),
    }),
  },
]);

export const yamahaClient = new Zodios(
  "https://webapi.syncroom.appservice.yamaha.com/comm",
  yamahaApi,
);

yamahaClient.use(authorizationPlugin);

export const yamaha = new ZodiosHooks("", yamahaClient);
