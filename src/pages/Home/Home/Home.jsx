import Discount from "../../Shared/ExtraSection/Discount";
import ExtraSection1 from "../../Shared/ExtraSection/ExtraSection1";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    return (
        <div className="bg-lime-50">
           <Banner></Banner>
           <Gallery></Gallery>
          <h4>this home</h4>
          <ExtraSection1></ExtraSection1>
          <Discount></Discount>
          
        </div>
    );
};

export default Home;