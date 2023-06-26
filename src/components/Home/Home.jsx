import Navbar from "../Navbar/Navbar";
import SliderComponent from "../Slider/Slider";
import AboutUs from "../About/AboutUs";
import Footer from "../Footer/Footer";
import ContextProvider from "../context/Context";
import Description from "../Description/Description";
// import Options from "../Options/Options";

const Home = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <SliderComponent />
        <AboutUs />
        <Description />
        {/* <Options /> */}
        <Footer />
      </ContextProvider>
    </>
  );
};

export default Home;
