import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const links = [ 
    { path: "/", title: "Home", active: "/" === location.pathname, id: 1 },
    { path: "/Cities", title: "Cities", active: "/Cities" === location.pathname, id: 2 }
  ];
  
  return (
    <header className="text-[#F1EEE8] w-full h-24 bg-opacity-80 bg-[#2A4C09]">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 p-6 pt-2">
          <img className="w-12 h-12 sm:w-20 sm:h-20 object-cover" src="./public/logo.png" alt="" />
          <h1 className="m-5 text-sm sm:text-3xl border-gray-600 font-bold">MyTinerary</h1>
        </div>
        <nav className="flex items-center text-[#F1EEE8] border-gray-600 font-semibold gap-3 sm:gap-10 m-5">
          {links.map((link) => ( 
            <Link key={link.id} className={`text-md sm:text-2xl rounded-lg text-center p-1 ${link.active ? "hover:bg-[#aaaa9a] transition duration-300 ease-in-out p-2" : ""}`} to={link.path}>{link.title}</Link>
          ))}
          <img className="w-8 h-8 sm:w-10 sm:h-10" src="./usuario.png" alt="" />
        </nav>
      </div>
    </header>
  );
}

export default Header;