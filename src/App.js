import Footer from "./Footer";
import Navbar from "./Navbar";
import AppSection from "./AppSection";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";


const App = () => {
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
           
        </div>
    );
};

export default App