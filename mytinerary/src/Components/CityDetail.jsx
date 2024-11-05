import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItinerariesRequest, fetchItinerariesSuccess, fetchItinerariesFailure } from "../store/actions/itineraryActions";
import { FaRegThumbsUp, FaHashtag } from "react-icons/fa";

export default function CityDetail() {
  const { cityName } = useParams(); 
  const dispatch = useDispatch();
  const itineraries = useSelector(state => state.itineraries.itineraries); 
  const loading = useSelector(state => state.itineraries.loading);
  const error = useSelector(state => state.itineraries.error);
  const [viewMore, setViewMore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        dispatch(fetchItinerariesRequest());
      
        try {
          const response = await fetch(`http://localhost:8080/api/itinerary/filter?city=${cityName}`);
          const data = await response.json();
          
          if (response.ok) {
            dispatch(fetchItinerariesSuccess(data.response));
          } else {
            dispatch(fetchItinerariesFailure('No itineraries found for this city'));
          }
        } catch (error) {
          dispatch(fetchItinerariesFailure(error.message));
        }
      };
      
    fetchData();
  }, [dispatch, cityName]);

  if (loading) {
    return <p>Loading itineraries...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!itineraries || !Array.isArray(itineraries) || itineraries.length === 0) {
    return <p>No itineraries yet for this city.</p>;
  }

  return (
    <div className="px-8 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">{cityName} Itineraries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {itineraries.map((itinerary) => (
          <div key={itinerary._id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={itinerary.image}
              alt={itinerary.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <div className="flex items-center mb-4">
              <img
                src={itinerary.userImage}
                alt={itinerary.userName}
                className="w-10 h-10 rounded-full mr-3"
              />
              <h3 className="text-xl font-semibold">{itinerary.userName}</h3>
            </div>
            <h2 className="text-2xl font-bold mb-2">{itinerary.name}</h2>
            <p className="text-gray-600 mb-2">Price: {itinerary.price } 💵</p>
            <p className="text-gray-600 mb-2">Duration: {itinerary.duration}</p>
            <p className="text-gray-600 mb-4">Likes: {itinerary.likes || 0} <FaRegThumbsUp className="inline-block" /></p>
            <div className="mb-4">
              {itinerary.hashtags.split(' ').slice(0, 3).map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  <FaHashtag className="inline-block mr-1" /> {tag}
                </span>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
              onClick={() => setViewMore(itinerary._id === viewMore ? null : itinerary._id)} 
            >
              {viewMore === itinerary._id ? "Hide" : "View more"}
            </button>
            {viewMore === itinerary._id && (
              <div className="mt-4">
                <p className="text-gray-600 mb-4">Comments: {itinerary.comments || "No comments available."}</p>
                <p className="text-red-500 text-center">Under construction: Activities and more details coming soon!</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
