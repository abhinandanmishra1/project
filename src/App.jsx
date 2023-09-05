import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="bg min-h-screen w-full">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
