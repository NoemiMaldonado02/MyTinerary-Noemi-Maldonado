import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCity } from '../services/citiesQueries';
import ItinerariesItem from '../components/ItinerariesItem';

const City = () => {
  const params = useParams();
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);
  const [itineraries, setItineraries] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    getCity(params.id).then( (res) => {
      if(res._id){
          setCity(res)
      }else{
          alert (`City not available`)
          navigate("/Cities")
      }
      setItineraries(res.itineraries)
  })
      .catch(error => {
        console.error("Error fetching city:", error);
        alert("Error fetching city. Please try again later.");
        navigate("/Cities");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="flex-grow flex flex-col justify-center items-center relative bg-gray-800">
        <div>
          <h1 className="text-center text-[#aaaa9a] font-medium text-2xl">Loading...</h1>
        </div>
      </main>
    );
  }
  
  return (
    <main className="flex-grow relative bg-cover bg-center h-auto" style={{ backgroundImage: 'url(/paisaje5.jpg)' }}>
  <div className="flex flex-col justify-center items-center mt-7">
    <h1 className="text-3xl text-[#F1EEE8] sm:text-5xl mb-2">{city.name}</h1>
    <h2 className="text-xl text-[#F1EEE8] sm:text-3xl mb-3 font-semibold">{city.country}</h2>
    <img className="w-1/2 h-auto object-cover rounded-lg pb-4" src={city.image} alt={city.name} />
    <Link to="/Cities" className="p-2 text-lg font-medium hover:bg-[#aaaa9a] transition duration-300 ease-in-out rounded-lg text-[#F1EEE8] border-gray-600">Go to the cities</Link>
  </div>
  <div className="mt-10">
    <h1 className="text-3xl sm:text-2xl md:text-3xl text-center text-[#F1EEE8] font-bold mx-10 my">Itineraries:</h1>
    {itineraries.length > 0 ? (
      itineraries.map((itinerary) => (
        <div key={itinerary._id} className="mx-10 my-7 flex flex-col gap-5">
          <ItinerariesItem itinerary={itinerary} />
        </div>
      ))
    ) : (
      <h1 className="text-center text-2xl font-semibold text-[#F1EEE8] m-10">There are no itineraries for this city yet.</h1>
    )}
  </div>
</main>
)}

export default City;
