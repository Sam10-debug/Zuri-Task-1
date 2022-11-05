import MainSection from "./components/MainSection";
import { Routes,Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;


