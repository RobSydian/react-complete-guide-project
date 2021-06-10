import React from "react";

import "./NewExpense.css";
import "./ExpenseForm.css";

export default ({onClickHandler}) => {
  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        <button type="button" onClick={onClickHandler}>
          Add New Expense
        </button>
      </div>
    </div>
  );
};
