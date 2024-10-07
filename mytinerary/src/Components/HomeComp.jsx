import { FaCity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function CitiesCTA() {
    const navigate = useNavigate();

    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 sm:px-12 md:px-20 lg:px-28 rounded-lg shadow-lg overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&q=80&fit=crop&w=800&h=600"
                    alt="City background"
                    className="object-cover object-center w-full h-full opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <FaCity className="text-6xl text-yellow-400 animate-bounce" />
                <h1 className="text-4xl font-extrabold md:text-5xl">Discover Amazing Cities</h1>
                <p className="text-lg md:text-xl max-w-2xl">
                    Explore the most beautiful cities around the world. Dive into vibrant cultures, iconic landmarks, and unique experiences. Ready to start your journey?
                </p>

                <button
                    onClick={() => navigate('/cities')}
                    className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-semibold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                    <FaCity className="mr-3 text-2xl" />
                    Explore Cities Now
                </button>
            </div>
        </div>
    );
}



export function Carrusel() {
    const cities = [
        { name: "New York", image: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg" },
        { name: "Paris", image: "https://wallpapers.com/images/featured/paris-zy4x2ow5p7j5qi4a.jpg" },
        { name: "Tokyo", image: "https://d0626f1e44.clvaw-cdnwnd.com/efd82a4c10d67d793c62b322158b9943/200002120-9d5669d568/shinjuku-8.jpeg?ph=d0626f1e44" },
        { name: "London", image: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg" },
        { name: "Sydney", image: "https://dingoos.com/wp-content/uploads/2017/11/estudiar-en-sydney-1.jpg" },
        { name: "Dubai", image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg" },
        { name: "Rome", image: "https://static.nationalgeographic.es/files/styles/image_3200/public/colosseum-daylight-rome-italy.jpg?w=1600&h=900" },
        { name: "Berlin", image: "https://www.berlin-welcomecard.de/system/files/styles/metatag_og_large/private/images/blick_auf_die_berliner_innenstadt_mit_dem_fernsehturm_web.jpg?itok=fKCo7T8F" },
        { name: "Rio de Janeiro", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg" },
        { name: "Moscow", image: "https://viajesoceanic.com/wp-content/uploads/2018/03/Moscu.jpg" },
        { name: "Toronto", image: "https://www.toronto.ca/wp-content/uploads/2024/07/8fc2-social-VEO.jpg" },
        { name: "Amsterdam", image: "https://img2.rtve.es/i/?w=1600&i=1698226240350.jpg" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3); 
        }, 6000);
        return () => clearInterval(interval); 
    }, []);

    
    const slides = [];
    for (let i = 0; i < cities.length; i += 4) {
        slides.push(cities.slice(i, i + 4));
    }
   
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">Popular Mytineraries</h2>
            <div className="relative">
                <div className="flex justify-center overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            className={`flex space-x-4 transition-all duration-800 ease-in-out ${index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                            key={index}
                            style={{ display: index === currentSlide ? "flex" : "none" }}
                        >
                            {slide.map((city, i) => (
                                <div key={i} className="w-72">
                                    <img src={city.image} alt={city.name} className="rounded-lg w-full h-60 object-cover" />
                                    <p className="text-center mt-2 text-lg font-semibold">{city.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between absolute top-28 w-full transform ">
                    <button
                        className=" opacity-10 hover:opacity-100 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none transition-all duration-300 transform hover:scale-110 -left-2 absolute"
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                    >
                        <GrPrevious/> 
                    </button>
                    <button
                        className=" opacity-10 hover:opacity-100 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none transition-all duration-300 transform hover:scale-110 -right-2 absolute"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
                    >
                        <GrNext/>
                    </button>
                </div>
            </div>
        </div>
    );
}

