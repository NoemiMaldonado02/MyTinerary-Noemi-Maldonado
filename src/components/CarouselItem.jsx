import React from 'react'

export const CarouselItem = ({cities}) => {
  return (
    <div className="flex justify-center flex-wrap bg-[#aaaa9a] bg-opacity-50 rounded-full w-full sm:2/3 2xl:w-2/5 gap-10 mb-16">
          {cities.map((city) => (
            <article className=" rounded-lg shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]" key={city.name}>
              <img className="w-28 h-28 sm:w-64 sm:h-72 object-cover rounded-lg " src={city.image} alt="" />
              <footer>
                <h1 className=" text-center font-semibold bg-[#2A4C09]/55 text-[#F1EEE8] text-s sm:text-xl">
                  {city.name}
                </h1>
                <p className=" text-center font-medium bg-[#2A4C09]/55 text-[#F1EEE8] text-xs sm:text-sm ">
                  {city.country}
                </p>
              </footer>
            </article>
          ))}
        </div>
  )
}

export default CarouselItem