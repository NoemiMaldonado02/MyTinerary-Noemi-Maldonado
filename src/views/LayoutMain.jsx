import Footer from "../components/Footer";
import Header from "../components/Header"


const LayoutMain = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
     <Header />
        {props.children}
      <Footer />
    </div>
  );
}

export default LayoutMain