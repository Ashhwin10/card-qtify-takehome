import CardComponent from "./Components/CardComponent/CardComponent";
import HeroImage from "./Components/HeroSection/HeroImage";
import Navbar from "./Components/NavBar/NavBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <CardComponent />
    </div>
  );
}
