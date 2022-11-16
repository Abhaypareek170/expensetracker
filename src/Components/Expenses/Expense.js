import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItems from "./ExpenseItems";

const DUMMY_EXPENSE = [
  {amount:100,desc:"Bike Petrol",cat:"Fuel"},
  {amount:200,desc:"BreakFast",cat:"Food"}
]

const Expense = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  useEffect(() => {
    axios
      .get(`https://expensetracker-b0ad6-default-rtdb.firebaseio.com/expense.json`)
      .then((res) => {
        console.log(res.data);
        // const getExpense = (Object.values(res.data));
        Object.values(res.data).forEach((val)=>{
          setExpenses((prevExpense) => {
            return [...prevExpense,val];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

    const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [...prevExpense,expense];
    });
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
                    <ExpenseForm onAddExpense={addExpenseHandler} />
                    <ul>
                    {expenses.map((expense)=>(
                        <ExpenseItems key={expense.desc} expense={expense}/>
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
