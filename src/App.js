import './App.css';
import hero from "./assets/hero.jpg";
import syntex_1 from "./assets/syntex-1.jpg";
import syntex_2 from "./assets/syntex-2.jpg";
import Hero from "./components/Hero"


function App() {
  return (
    <div className="App">
      <Hero imageSrc={hero}/>
    </div>
  );
}

export default App;
