import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
