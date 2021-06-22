import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const expenseDataHandler = (expenseData) => {
        const expenses = {
            ...expenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenses);
        setIsEditing(false);
    }
    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true);
    }
    const cancelHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onAddExpenseData={expenseDataHandler}
                onCancel={cancelHandler}
            />}
        </div>
    );
}

export default NewExpense;