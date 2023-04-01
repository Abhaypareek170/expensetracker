import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import SignUp from "./Components/Authantication/SignUp";
import Login from "./Components/Authantication/Login";
import Home from "./Components/Pages/Home";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import ForgotPassword from "./Components/Authantication/ForgotPassword";
import Expense from "./Components/Expenses/Expense";
import Protected from "./Components/Pages/Protected";
import NotFound from "./Components/Pages/NotFound";
import { useEffect,useState } from "react";
import { expenseActions } from "./store/expenses";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [keys,setKeys] = useState();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  const fetchExpenses = async () => {
    const res = await axios
      .get(
        `https://expense-fe5b3-default-rtdb.firebaseio.com/expense/${user}.json`
      )
      .catch((err) => {
        console.log(err);
      });
      console.log("fetchCalled")
    setKeys(res.data);
    Object.values(res.data).forEach((val) => {
      dispatch(expenseActions.setExpense(val));
    });
  };
  useEffect(() => {
    fetchExpenses();
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Protected Component={Home} />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/expenses"
          element={<Protected Component={Expense} keys={keys}/>}
        ></Route>
        <Route path="*" element={<Protected Component={NotFound} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
