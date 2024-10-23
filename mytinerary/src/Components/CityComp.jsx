import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CardCity() {
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/cities/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data.response)) {
                    setCities(data.response);
                } else {
                    setCities([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p>Loading cities...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="px-8 py-6">
      
        <div className="mb-8 relative max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search by city..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 py-3 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white overflow-hidden border border-gray-200 hover:border-blue-500"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-64 object-cover" 
                />     
                <div className="p-6 h-56 flex flex-col justify-between ">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{city.name}</h2>
                    <p className="text-gray-600 text-base mb-4">{city.description}</p>
                    <p className="text-green-500 font-semibold text-lg">Price: {city.price}</p>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <p className="text-yellow-500 font-medium">Rating: {city.rating} ⭐</p>
                    <Link
                      to={`/city/${city.name}`}
                      state={{ image: city.image }}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
                    >
                      More Information
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No cities found matching your search.</p>
          )}
        </div>
      </div>
      
    );
}
