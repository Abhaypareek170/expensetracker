import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import ExpenseItems from "./ExpenseItems";
import { expenseActions } from "../../store/expenses";
import Nav from "../UI/Nav";
import { themeActions } from "../../store/theme";
import { CSVLink } from "react-csv";
import axios from "axios";

const Expense = (props) => {
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const user = useSelector(state=>state.auth.user);
  const expenses = useSelector((state) => state.expense.expenses);
  const amount = useSelector((state) => state.expense.amount);
  const darkTheme = useSelector((state) => state.theme.darkMode);

  const addExpenseHandler = (expense) => {
    dispatch(expenseActions.addExpense(expense));
    axios
      .post(
        `https://expense-fe5b3-default-rtdb.firebaseio.com/expense/${user}.json`,
        expense
      )

      .then((res) => {
        if (res.ok) {
          console.log("Send");
          return res.json();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const deleteExpenseHandler = (expense) => {
    dispatch(expenseActions.deleteExpense(expense));
    console.log("delete");
  };
  const editExpenseHandler = (expense, id) => {
    console.log("edit called");
    setItem(expense);
    setId(id);
  };
  const premimumModeHandler = (e) => {
    e.preventDefault();
    dispatch(themeActions.changeMode());
  };

  const editExpenseHandler2 = (oldExpense, newExpense, sendId) => {
    console.log(oldExpense);
    let newExpenses = [...expenses];
    console.log(newExpenses);
    let index = newExpenses.findIndex((ele) => (ele = oldExpense));

    newExpenses[index] = newExpense;
    dispatch(expenseActions.editExpense(newExpenses));
    axios
      .put(
        `https://expense-fe5b3-default-rtdb.firebaseio.com/expense/${user}/${sendId}.json`,
        newExpense
      )
      .then((res) => {
        if (res.ok) {
          console.log("Updated");
          return res.json();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const data = (arr) => {
    return arr.map((ele) => (ele = [ele.amount, ele.cat, ele.desc]));
  };
  const csvData = [["Amount", "Category", "Description"]].concat(
    data(expenses)
  );
  return (
    <>
      <Nav />
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
                    {amount >= 10000 && (
                      <button onClick={premimumModeHandler}>
                        {darkTheme ? "LightMode" : "Premium Mode"}
                      </button>
                    )}
                    <CSVLink data={csvData}>Download Expense</CSVLink>
                    <h2 className="text-uppercase text-center mb-5">Expense</h2>
                    <h3 className="text-uppercase text-center mb-5">
                      Amount = {amount}
                    </h3>
                    <ExpenseForm
                      onAddExpense={addExpenseHandler}
                      onEditExpense={editExpenseHandler2}
                      expense={item}
                      id={id}
                    />
                    <ul>
                      {expenses.map((expense) => (
                        <ExpenseItems
                          key={Math.random()}
                          keys={props.keys}
                          expense={expense}
                          onDelete={deleteExpenseHandler}
                          onEditExpense={editExpenseHandler}
                        />
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
