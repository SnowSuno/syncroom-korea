import { useQuery } from "react-query";

import { getRooms } from "@/common/api";

export const useRooms = () =>
  useQuery("rooms", getRooms, { refetchInterval: 5000 });
