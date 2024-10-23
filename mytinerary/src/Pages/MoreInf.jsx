import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

function MoreInf() {
    const { cityName } = useParams();
    const { cityDescription } = useParams();
    const location = useLocation();
    const image = location.state?.image || '';

    return (
        <div className="relative h-screen w-full">
           
            {image ? (
                <img
                    src={image}
                    alt={cityName}
                    className="absolute top-0 left-0 w-full h-full object-cover" 
                />
            ) : (
                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl text-white">No image available for {cityName}</p>
            )}

            
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start p-8 z-10 bg-black bg-opacity-50">
                <h1 className="text-7xl font-bold text-white mb-4 text-center mt-10">{cityName}</h1>
                <p className="text-2xl text-white mb-4 text-center">{cityDescription}</p>
                <p className="text-2xl text-white mb-4 text-center">Under construction</p>

                <Link to="/cities">
                    <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
                        Return to Cities
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MoreInf;