import "./App.css";
import { NavBar } from "./components/NavBar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner.tsx";
import { Skills } from './components/Skills.tsx'
import { Projects } from './components/Projects.tsx'
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
