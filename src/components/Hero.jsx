import { Link } from "react-router-dom";

const Hero = () =>{
  return (
      <div className="relative">
        <section className="w-full h-auto relative flex justify-center items-center">
          <img src="./public/paisaje.jpg" className="w-full h-1/2 object-cover" alt="paisaje" />
          <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center">
            <h1 className="text-2xl sm:text-5xl font-bold text-white">MYTINERARY</h1>
            <h2 className="text-lg sm:text-3xl p-1 text-white italic font-semibold">"Find your perfect trip, designed by insiders who know and love their cities!"</h2>
            <Link className="text-lg sm:text-2xl text-black font-bold bg-[#949483] bg-opacity-90 rounded-full hover:bg-[#aaaa9a] transition duration-300 ease-in-out p-2" to="/Cities">TRAVEL WITH US!</Link>
          </div>
        </section>
        <section className="w-full h-auto">
          <img src="./public/banner.png" className="w-auto h-auto sm:w-full sm:h-auto object-cover shadow-lg" alt="banner" />
        </section>
      </div>
    );
}    
export default Hero