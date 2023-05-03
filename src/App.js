import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import DetailUsers from "./Pages/User/DetailUsers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailusers/:id" element={<DetailUsers />} />
      </Routes>
    </>
  );
}

export default App;
