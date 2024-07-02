import  { useState, useEffect } from 'react';

const Bedroom = () => {
    const [bedrooms, setBedrooms] = useState([]);

    useEffect(() => {
        const fetchBedrooms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/bedroom`);
                const data = await response.json();
                setBedrooms(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBedrooms();
    }, []);

    return (
        <div>
            <h2>Bedroom</h2>
            {bedrooms.map((room) => (
                <div key={room.id}>
                    <p>Price: ${room.price}</p>
                    <div>
                        <img src={room.pictures} alt={`bedroom ${room.id}`} width="100" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bedroom;
