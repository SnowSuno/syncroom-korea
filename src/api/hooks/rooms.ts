import { useQuery } from "react-query";

import { getRooms } from "@/api/endpoints";

export const useRooms = () =>
  useQuery("rooms", getRooms, { refetchInterval: 5000 });
