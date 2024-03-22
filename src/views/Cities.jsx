import React, { useEffect, useRef } from 'react';
import { getCities } from "../services/citiesQueries";
import CardsCitys from "../components/CardsCitys";
import { useSelector, useDispatch } from "react-redux";
import { filterByName, loadCities } from "../redux/actions/citiesActions";

export const Cities = () => {

  const inputSearch = useRef(null)
  const dispatch = useDispatch()
  const {allCities, filteredCities, search} = useSelector( (store) => store.cities)


    useEffect(() =>{
      if(allCities.length == 0){
      getCities().then( (data) => {
        dispatch(loadCities(data))
      })}
    }, []);


    const handleInput = () =>{
      dispatch(filterByName(inputSearch.current.value))
    }

  return (
    <main className="flex-grow relative bg-cover object-cover bg-center h-auto" style={{ backgroundImage: 'url(/paisaje3.jpg)' }}>
      <div className="bg-black bg-opacity-50 py-16">
        <h1 className="text-3xl text-[#F1EEE8] font-medium text-center mb-8">Cities</h1>
        <div className="w-full flex justify-center mb-8">
          <input className="w-5/12 sm:w-80 rounded-lg border border-solid px-2 font-bold" type="text" placeholder="Search city" onInput={handleInput} ref={inputSearch} defaultValue={search} />
        </div>
        <div className="flex flex-wrap justify-center pl-10 pr-10">
          {filteredCities.length > 0 &&
            filteredCities.map((city) => (
              <div key={city._id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4 sm:pl-4 sm:pr-4 flex justify-center items-center relative">
                <div className="w-full">
                  <div className="relative w-full">
                    <CardsCitys city={city} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center z-10 p-0">
                      <div className="flex items-start w-full">
                        <CardsCitys city={city} />
                        <div className="w-1/2 h-full">
                          <p className="text-white text-xl font-sans p-4">{city.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Cities;
