import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import ExpenseItems from "./ExpenseItems";
import { expenseActions } from "../../store/expenses";


const Expense = () => {
  const dispatch = useDispatch();
  const [keys,setKeys] = useState();
  const expenses = useSelector(state=>state.expense.expenses);

    const fetchExpenses = async() =>{
      const res = await axios.get(`https://expensetracker-b0ad6-default-rtdb.firebaseio.com/expense.json`)
      .catch((err) => {
        console.log(err);
      });  
      setKeys(res.data);
      Object.values(res.data).forEach(val=>{
        dispatch(expenseActions.setExpense(val))
      })
       
      }
    useEffect(() => {
      fetchExpenses();
    },[]);

    const addExpenseHandler = (expense) => {
      dispatch(expenseActions.addExpense(expense));
    axios
    .post("https://expensetracker-b0ad6-default-rtdb.firebaseio.com/expense.json",expense)
     
      .then((res) => {
        if (res.ok) {
          console.log("Send");
          return res.json();
      }}).catch((err) => {
            
            throw new Error(err);
          });
    }
    const deleteExpenseHandler = (expense)=>{
     dispatch(expenseActions.deleteExpense(expense));
      console.log("delete")
    }
    const editExpenseHandler = (expense,id)=>{
      console.log("edit called")
      // let newExpenses = [...expense];
      // let index = newExpenses.findIndex(data);
      // newExpenses[index] = expense;
      // setExpenses(newExpenses);
      // dispatch(expenseActions.editExpense(expense));
      axios.put(`https://expensetracker-b0ad6-default-rtdb.firebaseio.com/expense/${id}.json`,expense).then((res) => {
        if (res.ok) {
          console.log("Updated");
          return res.json();
      }}).catch((err) => {
            
            throw new Error(err);
          });
    }
  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage: `url('https://images.ctfassets.net/ifu905unnj2g/4EPQDIZAwMKSAAKeEao84E/4b26cf630da967ea0d86c7581e53767c/Pie_Chart_and_Calculator_Green_Background-min.png')`,
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Add Expense
                    </h2>
                    <ExpenseForm onAddExpense={addExpenseHandler}  onEditExpense={editExpenseHandler}/>
                    <ul>
                    {expenses.map((expense)=>(
                        <ExpenseItems key={expense.desc} keys={keys} expense={expense} onDelete={deleteExpenseHandler} onEditExpense={editExpenseHandler}/>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expense;
