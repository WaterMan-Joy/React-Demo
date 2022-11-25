import ExpenseItem from "./components/ExpensItem";

function App() {
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
      <h1>My First React Project!!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
