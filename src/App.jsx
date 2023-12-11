import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import NavSection from "./components/NavSection";

function App() {
  return (
    <>
      <Header />
      <NavSection/>
    </>
  );
}

export default App;
