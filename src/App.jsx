import { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import BottomNav from "./components/bottomNav";
import MyWork from "./components/work";
import Experience from "./components/experience";
import Connect from "./components/connect";
import MobileBottomNav from "./components/mobileBottomNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-10 py-10 lg:py-30 lg:px-50 overflow-hidden">
      <main>
        <Hero />
        <About />
        <div className="hidden md:block">
          <BottomNav />
        </div>
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
        <Experience />
        <MyWork />
        <Connect />
      </main>
    </div>
  );
}

export default App;
