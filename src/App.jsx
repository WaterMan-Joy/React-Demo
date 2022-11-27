import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "iPhone 1", amount: 1000, date: new Date() },
    { title: "iPhone 2", amount: 1000, date: new Date() },
    { title: "iPhone 3", amount: 1000, date: new Date() },
    { title: "iPhone 4", amount: 1000, date: new Date() },
    { title: "iPhone 5", amount: 1000, date: new Date() },
    { title: "iPhone 6", amount: 1000, date: new Date() },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
