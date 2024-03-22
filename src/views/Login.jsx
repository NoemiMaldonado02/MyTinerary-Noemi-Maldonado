import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts"
import { login } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        const aux = {...formData}
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        const aux = {...formData}
        for (const key in aux) {
            if (!aux[key]) delete aux[key]
        }
        authQueries.login(aux).then((response) => {
            if(response.status == 200){
                dispatch(login(response.data))
                alerts.success("Login Allowed")
                navigate("/")
            }else{
                alert(response.statusMsg)
            }
        })
    }

  return (
    <main className="flex-grow relative bg-cover object-cover bg-center h-auto" style={{ backgroundImage: 'url(/paisaje5.jpg)' }}>
    <div className="bg-black bg-opacity-50 py-48 grow flex flex-col justify-center items-center gap-7">
      <h1 className="text-4xl text-white italic font-semibold">Login</h1>
      <div className="w-8/12 sm:w-4/12 h-2/6 p-5 flex flex-col items-center rounded-lg">
        <form 
        onSubmit={handleSubmit}
        onInput={handleInput}
        className="w-full text-zinc-950 flex flex-col gap-5 items-center py-5"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-9/12 h-8 rounded-lg p-2 ps-4"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-9/12 h-8 rounded-lg p-2 ps-4"
          />
          <input
            type="submit"
            className="bg-[#aaaa9a] w-24 sm:w-40 h-8 font-semibold rounded-lg"
            value="Login"
          />
        </form>
        <Link
          className="flex justify-center items-center text-[#aaaa9a] h-10 w-full sm:w-full font-semibold"
          to="/SignUp"
        >
          You don´t have an account? Sign Up
        </Link>
      </div>
      </div>
    </main>
  );
}

export default Login;