import React from "react";
import CardCity from "../Components/CityComp";


export default function Cities() {
    
    return (
        <>
            <div className="bg-slate-500">
                <div className="relative h-3/4 py-16 px-6 sm:px-12 md:px-20 lg:px-28 shadow-lg overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >

                        <source src="..\public\2547258-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                        Your browser does not support video playback.
                    </video>
                    <div className="relative z-10 flex justify-center items-center h-full">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-bold mb-4">My Cities</h1>
                            <p className="text-lg">Explore the world’s most exciting cities with us. From iconic landmarks to hidden gems, each destination offers a unique adventure. Find your next journey today!</p>
                           
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
                </div>
                <CardCity></CardCity>
            </div>
        </>
    )
}

