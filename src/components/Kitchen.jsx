import  { useState, useEffect } from 'react';

const Kitchen = () => {
    const [kitchens, setKitchens] = useState([]);

    useEffect(() => {
        const fetchKitchens = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/kitchen`);
                const data = await response.json();
                setKitchens(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchKitchens();
    }, []);

    return (
        <div>
            <h2>Kitchen</h2>
            {kitchens.map((room) => (
                <div key={room.id}>
                    <p>Price: ${room.price}</p>
                    <div>
                        <img src={room.pictures} alt={`kitchen ${room.id}`} width="100" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Kitchen;
