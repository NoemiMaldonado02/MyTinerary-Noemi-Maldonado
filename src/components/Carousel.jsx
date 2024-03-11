import React, { useState } from "react";
import CarouselItem from "../components/CarouselItem";

export const Carousel = ({citys}) => {
  const [cities, setCities] = useState(citys[0]);
  const [indice, setIndice] = useState(0);

  const next = () => {
    let aux = indice == 2 ? 0 : indice + 1;
    setIndice(aux);
    setCities(citys[aux]);
  };
  const prev = () => {
    let aux = indice == 0 ? 2 : indice - 1; 
    setIndice(aux);
    setCities(citys[aux]);
  };

  return (
    <div className="flex flex-wrap justify-center h-full">
      <h1 className="text-3xl w-full text-center text-[#F1EEE8] font-semibold mt-8 mb-8">

      </h1>
      <button className="text-3xl text-[#F1EEE8] mb-16" onClick={prev}>
      {" "}
      ⪻ {" "}
      </button>
      <CarouselItem cities={cities} />
      <button className="text-3xl text-[#F1EEE8] mb-16" onClick={next}>
       {" "}
       ⪼ {" "}
      </button>
    </div>
  );
};

export default Carousel