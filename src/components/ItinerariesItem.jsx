import React from 'react';

const ItinerariesItem = ({ itineraries }) => {
  function price(amount) {
    let final = '';
    for (let i = 0; i < amount; i++) {
      final += '💸';
    }
    return final;
  }

  return (
    <article key={itineraries._id} className='flex flex-col items-center text-[#F1EEE8]'>
      <div className="flex flex-col items-center">
        <h1 className='text-lg sm:text-xl md:text-2xl font-sans italic mb-2'>{itineraries.title}</h1>
        <h2 className='text-base sm:text-lg md:text-xl w-1/2 '>{itineraries.description}</h2>
        <img className='w-1/2 h-auto object-cover rounded-lg p-4' src={itineraries.activities[0]} alt="" />
        <img className='w-1/2 h-auto object-cover rounded-lg p-4' src={itineraries.activities[1]} alt="" />
        <img className='w-1/2 h-auto object-cover rounded-lg p-4' src={itineraries.activities[2]} alt="" />
      </div>
      <div className="flex flex-col items-center pb-8 text-xl">
        <h2 className='hover:bg-[#aaaa9a] transition duration-300 ease-in-out rounded-lg text-[#F1EEE8] text-center'>Price: {price((itineraries.price))}</h2>
        <h3 className='text-sm sm:text-base md:text-lg text-center'>Estimated time: {itineraries.duration} Hours</h3>
        <h4 className='text-[10px] sm:text-base lg:text-lg text-center'>Hashtags: {itineraries.hashtags}</h4>
      </div>
      <div className='flex items-center flex-col pb-20'>
        <h1 className='text-md sm:text-lg md:text-xl text-center font-semibold'>Designated guide for the itinerary: {itineraries.guide}</h1>
        <img className='w-46 h-46 object-cover rounded-lg p-2' src={itineraries.guide_image} alt="" />
      </div>
    </article>
  );
};

export default ItinerariesItem;
