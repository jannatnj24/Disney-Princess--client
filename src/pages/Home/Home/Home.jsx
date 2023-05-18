import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="bg-lime-50">
           <Banner></Banner>
           <Gallery></Gallery>
          <h4>this home</h4>
        </div>
    );
};

export default Home;