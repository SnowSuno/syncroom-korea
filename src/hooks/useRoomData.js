import { useState, useEffect } from "react";
import axios from "axios";

const ROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

function useRoomData() {
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [autoReload, setAutoReload] = useState(true);

    const fetchRooms = async () => {
        /** @param response.data.rooms */
        try {
            setError(null);
            // setRoomData([]);
            setLoading(true);
            const response = await axios.get(ROOM_API);

            setRoomData(response.data.rooms);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRooms().then();
    }, []);

    return {roomData, loading, error, fetchRooms};
}

export default useRoomData;
