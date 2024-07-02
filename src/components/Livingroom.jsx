import { useState, useEffect } from 'react';

const LivingRoom = () => {
    const [livingRooms, setLivingRooms] = useState([]);

    useEffect(() => {
        const fetchLivingRooms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/livingroom`);
                const data = await response.json();
                setLivingRooms(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchLivingRooms();
    }, []);

    return (
        <div>
            <h2>Living Room</h2>
            {livingRooms.map((room) => (
                <div key={room.id}>
                    <p>Price: ${room.price}</p>
                    <div>
                        <img src={room.pictures} alt={`livingroom ${room.id}`} width="100" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LivingRoom;
