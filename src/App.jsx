import { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import BottomNav from "./components/bottomNav";
import MyWork from "./components/work";
import Experience from "./components/experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-50 py-30 ">
      <main>
        <Hero />
        <About />
        <BottomNav />
        <Experience />
        <MyWork />
      </main>
    </div>
  );
}

export default App;
