import "./App.css";

import HeadSet from "./components/headSet";
import HeroSection from "./components/heroSection";
import ParallaxSection from "./components/AppleParallaxSection";

import VrHeadset from "./components/vrHeadset";
import EntertainmentParallax from "./components/EntertainmentParallax";
import ProductivityParallax from "./components/ProductivityParallax";

function App() {
  return (
    <div>
      <HeroSection />
      <ParallaxSection />
      <VrHeadset />
      <EntertainmentParallax />
      <br />
      <ProductivityParallax/>
      <HeadSet />
    </div>
  );
}

export default App;
