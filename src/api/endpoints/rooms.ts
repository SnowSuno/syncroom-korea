import { z } from "zod";

import { yamahaClient } from "@/lib/axios";
import { roomSchema } from "@/schema/room";

export const getRooms = async () => {
  const res = await yamahaClient.get("/comm/public/room_list", {
    params: { pagesize: 500, realm: 4 },
  });
  return z.array(roomSchema).parse(res.data.rooms);
};
