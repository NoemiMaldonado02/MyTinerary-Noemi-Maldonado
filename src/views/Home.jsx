import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { cities } from "../data/data.js";


const Home = () => {
  const citys = [cities.slice(0, 4), cities.slice(4, 8), cities.slice(8, 12)];
  return (
    <>
      <Hero />
      <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('/public/paisaje2.jpg')" }}>
        <Carousel citys={citys} />
      </main>
    </>
  );
}  
export default Home;