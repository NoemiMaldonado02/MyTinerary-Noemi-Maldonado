import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { getCities } from "../services/citiesQueries";
import { useEffect, useState } from "react";



const Home = () => {
  const [cities, setCities] = useState([]);
  const [citiesSelect, setCitiesSelect,] = useState([])

  useEffect(() =>{
    getCities().then( (data) => {
      setCities(data)
      setCitiesSelect([data.slice(0, 4), data.slice(4, 8), data.slice(8, 12)])
    })
  }, []);
  
  return (
    <>
      <Hero />
      <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('/paisaje2.jpg')" }}>
      {!(cities.length > 0) ? <h2>loading</h2> : <Carousel citys={citiesSelect} />}
      </main>
    </>
  );
}  
export default Home;