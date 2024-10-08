import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaEarthAmericas } from "react-icons/fa6";

export default function CitiesCTA() {
    const navigate = useNavigate();

    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 sm:px-12 md:px-20 lg:px-28 rounded-lg shadow-lg overflow-hidden mt-7">

            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&q=80&fit=crop&w=800&h=600"
                    alt="City background"
                    className="object-cover object-center w-full h-full opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <FaEarthAmericas className="text-6xl text-yellow-400 animate-bounce" />
                <h1 className="text-4xl font-extrabold md:text-5xl">Discover Amazing Cities</h1>
                <p className="text-lg md:text-xl max-w-2xl">
                    Explore the most beautiful cities around the world. Dive into vibrant cultures, iconic landmarks, and unique experiences. Ready to start your journey?
                </p>

                <button
                    onClick={() => navigate('/cities')}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black text-xl font-semibold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
                >
                    <FaEarthAmericas className="mr-3 text-2xl" />
                    Explore Cities Now
                </button>
            </div>
        </div>
    );
}



export function Carrusel() {
    const cities = [
        { name: "Madrid", image: "https://media.timeout.com/images/105852421/750/422/image.jpg" },
        { name: "Bangkok", image: "https://www.vietnamstay.es/DataUpload/Attractions/201932822432-bangkok-overview-aerial-view-2.jpg" },
        { name: "Istanbul", image: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2019/12/24/5fa5393804286.r_d.499-319-0.jpeg" },
        { name: "Toronto", image: "https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/2021-12/Toronto_CIty_Highlights.jpg?VersionId=7E_yx1gQZzXtt4v5KDAAZnU0wMSyI8Z1" },
        { name: "Hong Kong", image: "https://cdn.pixabay.com/photo/2023/11/08/09/48/hong-kong-8374423_1280.jpg" },
        { name: "Los Angeles", image: "https://www.clarin.com/2018/12/26/srvVCcUrc_1256x620__1.jpg" },
        { name: "Lisbon", image: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/02/15/istock-478897762.jpeg" },
        { name: "Cairo", image: "https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/panorama-cairo.jpg" },
        { name: "Buenos Aires", image: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg" },
        { name: "Santorini", image: "https://static.cpau.org/revistanotas/contenidos/39/Santorini.jpg" },
        { name: "Seoul", image: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Seoul-1.jpg" },
        { name: "Monaco", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Monte_Carlo_Port_Hercules_b.jpg" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesPerSlide, setImagesPerSlide] = useState(4);

    useEffect(() => {
        const updateImagesPerSlide = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setImagesPerSlide(1);
            } else if (width < 1000) {
                setImagesPerSlide(2);
            } else if (width < 1224) {
                setImagesPerSlide(3);
            } else {
                setImagesPerSlide(4);
            }
        };

        updateImagesPerSlide();
        window.addEventListener("resize", updateImagesPerSlide);

        return () => window.removeEventListener("resize", updateImagesPerSlide);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(cities.length / imagesPerSlide));
        }, 8000);
        return () => clearInterval(interval);
    }, [imagesPerSlide]);

    const slides = [];
    for (let i = 0; i < cities.length; i += imagesPerSlide) {
        slides.push(cities.slice(i, i + imagesPerSlide));
    }

    return (
        <div className=" container mx-auto mt-5 pb-5">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Popular Mytineraries</h2>
            <div className="relative">
                <div className="flex justify-center overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            className={`flex justify-center space-x-4 transition-all duration-800 ease-in-out ${
                                index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                            }`}
                            key={index}
                            style={{ display: index === currentSlide ? "flex" : "none" }}
                        >
                            {slide.map((city, i) => (
                                <div key={i} className=" flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-72">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className=" rounded-lg w-full h-40 sm:h-48 md:col-span-12 lg:h-72 object-cover"
                                    />
                                    <p className="text-center mt-2 text-base sm:text-lg md:text-xl font-semibold">
                                        {city.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between absolute top-20 sm:top-28 w-full transform">
                    <button
                        className="opacity-10 hover:opacity-100 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gradient-to-r from-gray-600 to-gold focus:outline-none transition-all duration-300 transform hover:scale-110 left-1 absolute"
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                    >
                        <GrPrevious />
                    </button>
                    <button
                        className="opacity-10 hover:opacity-100 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gradient-to-r from-gray-600 to-gold focus:outline-none transition-all duration-300 transform hover:scale-110 right-1 absolute"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    >
                        <GrNext />
                    </button>
                </div>
            </div>
        </div>
    );
}
