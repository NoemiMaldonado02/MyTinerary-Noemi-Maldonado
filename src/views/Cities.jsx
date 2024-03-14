import React, { useState, useEffect, useRef } from 'react';
import { getCities } from "../services/citiesQueries";
import CardsCitys from "../components/CardsCitys";

export const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const inputSearch = useRef(null);

  useEffect(() => {
    getCities().then((data) => {
      setCities(data); 
      setFilteredCities(data); 
    });
  }, []);

  const handleInput = () => {
    const filter = filterByName(cities, inputSearch.current.value);
    setFilteredCities(filter);
  }
  
  const filterByName = (cityList, value) => cityList.filter((city) => 
    city.name.toLowerCase().startsWith(value.toLowerCase().trim()));

  return (
    <main className="flex-grow relative bg-cover bg-center h-auto" style={{ backgroundImage: 'url(./public/paisaje2.jpg)' }}>
      <div className="bg-black bg-opacity-50 py-16">
        <h1 className="text-2xl text-white font-bold text-center mb-8">Cities</h1> 
        <div className="w-full flex justify-center mb-8">
          <input className="w-5/12 sm:w-80 rounded-lg border border-solid px-2 font-bold" type="text" placeholder="Search city" onInput={handleInput} ref={inputSearch} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredCities.length > 0 && 
            filteredCities.map((city) => (
                <CardsCitys key={city._id} city={city} /> 
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Cities;
