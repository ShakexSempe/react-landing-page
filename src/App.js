import './App.css';
import hero from "./assets/shakex-logo-min.png";
import syntex_1 from "./assets/syntex-1.jpg";
import syntex_3 from "./assets/syntex-3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// navbar links 
const navbarLinks = [
  { url: "#", title: "Home"},
  { url: "#slider", title: "About"},
  { url: "#contact", title: "Contact"},
]


function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={hero}/>
      <Slider imageSrc={syntex_1} title={"Responsive Web Design"} 
              subtitle={"I code responsive websites for devices ranging from small smartphones to large display screens"
              }/>
      <Slider imageSrc={syntex_3} title={"User Interface & User Experience"} 
              subtitle={"I apply CSS3 transitions and animations to create clean user interface and immersive user experience"
              }
              flipped={true}
              />
      <Footer />
    </div>
  );
}

export default App;
