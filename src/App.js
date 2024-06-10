import './App.css';
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import { BrowserRouter, Routes, Route }from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
