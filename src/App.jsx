import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "iPhone 1", amount: 1000, date: new Date(2021, 2, 20) },
  { id: "e2", title: "iPhone 2", amount: 1000, date: new Date(2022, 4, 4) },
  { id: "e3", title: "iPhone 3", amount: 1000, date: new Date(2019, 4, 10) },
  { id: "e4", title: "iPhone 4", amount: 1000, date: new Date(2021, 9, 21) },
  { id: "e5", title: "iPhone 5", amount: 1000, date: new Date(2020, 3, 19) },
  { id: "e6", title: "iPhone 6", amount: 1000, date: new Date(2022, 8, 19) },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
