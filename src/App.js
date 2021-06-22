import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 434.5,
    date: new Date(2021, 3, 28)
  },
  {
    id: 'e2',
    title: "New Tv",
    amount: 487.5,
    date: new Date(2021, 5, 10)
  },
  {
    id: 'e3',
    title: "Refrigerator",
    amount: 6565.5,
    date: new Date(2021, 6, 11)
  },
  {
    id: 'e4',
    title: "Phone",
    amount: 123.5,
    date: new Date(2020, 4, 18)
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
