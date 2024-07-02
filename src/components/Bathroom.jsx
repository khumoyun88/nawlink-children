import  { useState, useEffect } from 'react';

const Bathroom = () => {
    const [bathrooms, setBathrooms] = useState([]);

    useEffect(() => {
        const fetchBathrooms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/bathroom`);
                const data = await response.json();
                setBathrooms(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBathrooms();
    }, []);

    return (
        <div>
            <h2>Bathroom</h2>
            {bathrooms.map((room) => (
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

export default Bathroom;
