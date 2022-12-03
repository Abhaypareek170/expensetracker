import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Authantication/SignUp";
import Login from "./Components/Authantication/Login";
import Home from "./Components/Pages/Home";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import ForgotPassword from "./Components/Authantication/ForgotPassword";
import Expense from "./Components/Expenses/Expense";
import Protected from "./Components/Pages/Protected";
import NotFound from "./Components/Pages/NotFound";

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
        <Route path="*" element={<Protected Component={NotFound}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
