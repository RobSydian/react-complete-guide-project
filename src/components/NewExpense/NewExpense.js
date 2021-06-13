import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [addingNewExpense, setAddingNewExpense] = useState(false);
  const toggleAddNewExpense = () => {
    setAddingNewExpense(!addingNewExpense);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addingNewExpense && (
        <AddNewExpense onClickHandler={toggleAddNewExpense} />
      )}
      {addingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickHandler={toggleAddNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
