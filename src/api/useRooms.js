import React, { useState, useEffect } from "react";
import axios from "axios";

const ROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

function useRooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRooms = async () => {
        try {
            setError(null);
            setRooms([]);
            setLoading(true);
            const response = await axios.get(ROOM_API);

            setRooms(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRooms().then();
    }, []);

    return {rooms, loading, error};
}

export default useRooms;
