import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Register, Login, Main, Navbar } from "./components";
const App = () => {
  const state = useSelector((state) => state.count);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
