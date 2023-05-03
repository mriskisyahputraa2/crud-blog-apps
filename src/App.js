import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import DetailUsers from "./Pages/User/DetailUsers";
import AddUser from "./Pages/User/AddUser";
import EditUser from "./Pages/User/EditUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-user/:id" element={<DetailUsers />} />
        <Route path="/add-user/" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
