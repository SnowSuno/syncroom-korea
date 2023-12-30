import { yamaha } from "@/api/client/yamaha";

export const useRooms = () =>
  yamaha.useGetRooms(
    {
      queries: {
        realm: 4,
        pagesize: 500,
      },
    },
    { refetchInterval: 5000 },
  );
