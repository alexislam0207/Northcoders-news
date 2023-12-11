import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import NavSection from "./components/NavSection";
import Allarticles from "./components/Allarticles";

function App() {
  return (
    <>
      <Header />
      <NavSection/>
      <Routes>
      <Route path="/all-articles" element={<Allarticles />} />
      </Routes>
    </>
  );
}

export default App;
