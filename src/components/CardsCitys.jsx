import React from 'react'

const CardsCitys = ({ city }) => {
  function handleClick() {
    
    window.location.href = `/cities/${city._id}`;
  }

return (
          <article className="w-auto h-auto relative overflow-hidden rounded-lg md:h-80 md:w-[30%] lg:h-96" id={city._id} onClick={handleClick}>
              <div className="h-24 w-full absolute z-10"></div>
              <img className="w-full h-full object-cover" src={`${city.image}`} alt={`${city.name}`}/>
              <footer className="bg-black/55 w-full absolute bottom-0 flex flex-col items-center font-bold">
                  <h2 className="text-[#F1EEE8]">{city.country}</h2>
                  <h2 className="text-[#F1EEE8]">{city.name}</h2>
              </footer>
          </article>
)
}
export default CardsCitys;
