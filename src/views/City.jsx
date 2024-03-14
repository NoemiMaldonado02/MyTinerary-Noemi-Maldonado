import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCity } from '../services/citiesQueries';
import { useEffect, useState } from 'react';

const City = () => {
    const params = useParams();
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect( () => {
        getCity(params.id).then( (res) => {
            if(res._id){
                setCity(res)
            }else{
                alert (`City not available`)
                navigate("/Cities")
            }
        })
        .finally(() => setLoading(false))
    }, [])
    
    if(loading){
        return(
            <>
            <main className="grow flex flex-col gap-5 justify-center items-center relative bg-cover bg-center h-auto" style={{ backgroundImage: 'url(./public/paisaje2.jpg)' }}>
                <div>
                    <h1 className='font-semibold text-2xl'>Loading...</h1>
                </div>
            </main>
            </>
        )
    }


    return (
    <>
    <main className="grow bg-cover bg-center h-auto" style={{ backgroundImage: 'url(./public/paisaje2.jpg)' }}>
        <div className="flex flex-col justify-center items-center mt-7">
            <h1 className="text-3xl sm:text-5xl mb-2text-[#F1EEE8]">{city.name}</h1>
            <h2 className="text-xl sm:text-3xl mb-3 text-[#F1EEE8]font-semibold">{city.country}</h2>
            <img className="w-11/12 h-[450px] object-cover redonded-lg" src={city.image} alt="" />
            <Link to="/Cities" className='text-lg font-medium text-[#aaaa9a] underline'>Go to the cities</Link>
        </div>
        <div className='mt-12'>
            <h1 className='text-center text-xl font-bold '>Under Construction</h1>
        </div>
    </main>
    </>
  )
}

export default City