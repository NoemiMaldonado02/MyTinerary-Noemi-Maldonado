import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { login, logout } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
  const user = useSelector((store) => store.user.user);
  const location = useLocation();
  const dispatch = useDispatch();

  const links = [ 
    { path: "/", title: "Home", active: "/" == location.pathname},
    { path: "/Cities", title: "Cities", active: "/Cities" == location.pathname},
    { path: "/SignUp", title: "SignUp", active: "/SignUp" == location.pathname, visable: user.first_name ? false : true},
    { path: "/Login", title: "Login", active: "/Login" == location.pathname, visable: user.first_name ? false : true },
  ]

  const handleClick = () => {
    dispatch(logout());
  };
 
  return (
    <header className="text-[#F1EEE8] w-full h-24 bg-opacity-80 bg-[#2A4C09]">
      <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4 p-6 pt-2">
          <img className="w-12 h-12 sm:w-20 sm:h-20 object-cover" src="/Logo.png" alt="Logo" />
          <h1 className="m-5 text-sm sm:text-3xl border-gray-600 font-bold">MyTinerary</h1>
        </div>
        <div className="flex items-center pr-6">
          <nav className="flex items-center text-[#F1EEE8] border-gray-600 font-semibold gap-3 sm:gap-10 m-5">
            {links.map((link) => (
              <Anchor key={link.title} link={link} />
            ))}
            <img className="w-8 h-8 sm:w-10 sm:h-10" src="/usuario.png" alt="Usuario" />
            {user.first_name && (
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-xs sm:text-base lg:text-xl font-semibold">{user.first_name}</p>
                <button onClick={handleClick}
                  className="text-md sm:text-xl rounded-lg text-center hover:bg-[#aaaa9a] transition duration-300 ease-in-out pb-2">Logout </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
 
const Anchor = ({ link }) => {
  if(link.visable){
    return (
      <Link
        key={link.title}
        className={`text-md sm:text-2xl rounded-lg text-center p-1 ${
          link.active ? "hover:bg-[#aaaa9a] transition duration-300 ease-in-out p-2" : ""
        }`}
        to={link.path}
      >
        {link.title}
      </Link>
    );
  }
  
};

export default Header;