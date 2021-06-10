import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [addingNewExpense, setAddingNewExpense] = useState(false);
  const toggleAddNewExpense = () => {
    setAddingNewExpense(!addingNewExpense);
  };

  return (
    <div>
      {!addingNewExpense && (
        <AddNewExpense onClickHandler={toggleAddNewExpense} />
      )}

      {addingNewExpense && (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onClickHandler={toggleAddNewExpense}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
