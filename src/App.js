import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Authantication/SignUp";
import Login from "./Components/Authantication/Login";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
