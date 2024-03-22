import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries } from "../services/countriesQueries"
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts"

function SignUp() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
    })

    const [countries, setCountries] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        getAllCountries().then(setCountries);
    }, [])

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        const aux = {...formData}
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e){
        e.preventDefault();
        const aux = {...formData}
        for (const key in aux) {
            if (!aux[key]) delete aux[key]
        }
        authQueries.register(aux).then((response) => {
            if(response.status == 201){
                alerts.success("Created Account")
                navigate("/Login")
            }else{
                alerts.error(response.statusMsg)
            }
        })
    }
   
  return (
    <main className="flex-grow relative bg-cover object-cover bg-center h-auto" style={{ backgroundImage: 'url(/paisaje.jpg)' }}>
    <div className="bg-black bg-opacity-50 py-24 grow flex flex-col justify-center items-center gap-7">
      <h1 className="text-4xl text-white italic font-semibold">Sing Up</h1>
      <div className="w-8/12 sm:w-4/12 h-2/6 p-5 flex flex-col items-center rounded-lg">
        <form 
        onSubmit={handleSubmit}
        onInput={handleInput}
        className="w-full text-zinc-950 flex flex-col gap-5 items-center py-5"
        >
          <input
            type="text"
            placeholder="Name"
            name="first_name"
            className="w-9/12 h-8 rounded-lg ps-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="w-9/12 h-8 p-2 rounded-lg ps-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-9/12 h-8 p-2 rounded-lg ps-4"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-9/12 h-8 p-2 rounded-lg ps-4"
          />
          <select className=" w-9/12 h-8 rounded-lg ps-4" name="country">
            <option value="" selected disabled>Select Country</option>
            {countries.length > 0 && countries.map( (country) => (<option key={country} value={country}>{country}</option>)) }
          </select>
          <input
            type="text"
            placeholder="Url Image"
            name="image"
            className="w-9/12 h-8 p-2 rounded-lg ps-4"
          />
          <input
            type="submit"
            className="bg-[#aaaa9a] w-24 sm:w-40 h-8 font-semibold rounded-lg"
            value="Submit"
          />
        </form>
        <Link
          className="flex justify-center items-center text-[#aaaa9a] h-10 w-20 sm:w-52 font-semibold"
          to="/Login"
        >
          You have an account? Login
        </Link>
      </div>
      </div>
    </main>
  );
}

export default SignUp;