import React from "react";
import CitiesCTA, { Carrusel } from "../Components/HomeComp";
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();
    return (
        <>
            <div className="relative h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >

                    <source src="..\public\4133023-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                </video>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">My Tineraries</h1>
                        <p className="text-lg">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <button onClick={() => navigate('/cities')} className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold">
                            Explore Now!
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
            </div>
            <CitiesCTA />
            <Carrusel></Carrusel>
        </>
    )
}


