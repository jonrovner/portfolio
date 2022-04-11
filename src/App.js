import { Route, Routes } from "react-router";
import Head from "./components/Head";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import './App.css';

function App() {
  return (
    <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>

            
    </div>
  );
}

export default App;