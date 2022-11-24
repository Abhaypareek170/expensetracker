import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Authantication/SignUp";
import Login from "./Components/Authantication/Login";
import Home from "./Components/Home";
import UpdateProfile from "./Components/UpdateProfile";
import ForgotPassword from "./Components/Authantication/ForgotPassword";
import Expense from "./Components/Expenses/Expense";
import Protected from "./Components/Pages/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Protected Component={Home}/>}></Route>
        <Route path="/updateProfile" element={<UpdateProfile/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/expenses" element={<Protected Component={Expense}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
