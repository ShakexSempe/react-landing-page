import './App.css';
import hero from "./assets/hero.jpg";
import syntex_1 from "./assets/syntex-1.jpg";
import syntex_3 from "./assets/syntex-3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

// navbar links 
const navbarLinks = [
  { url: "#", title: "Home"},
  { url: "#", title: "About"},
  { url: "#", title: "Contact"},
]


function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={hero}/>
      <Slider imageSrc={syntex_1} title={"Responsive Web Design"} 
              subtitle={"We make responsive websites for devices ranging from small smartphones to large display screens"
              }/>
      <Slider imageSrc={syntex_3} title={"Immersive User Interface and User Experience"} 
              subtitle={"Syntex uses transitions and animations to create beautiful pages users enjoy"
              }
              flipped={true}
              />
    </div>
  );
}

export default App;
