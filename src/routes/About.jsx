import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import aboutimg from "../assets/night.jpg"

function About() {
  return (
    <>
       <Navbar/>
     <Hero
     cName = "hero-mid"
     heroImg = { aboutimg}
     title = "About"
     btnClass = "hide"
     /> 
     <AboutUs/>
     <Footer/>
    </>
  );
}

export default About;