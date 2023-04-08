import NavbarComp from "./components/NavbarComp";
import Fixtures from "./features/fixtures/Fixtures";
import Standings from "./features/standings/Standings";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComp />
      <Routes>
        <Route path="/standings" element={<Standings />} />
        <Route path="/" element={<Fixtures />} />
      </Routes>
    </div>
  );
}

export default App;
