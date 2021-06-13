import React from "react";

import "./NewExpense.css";
import "./ExpenseForm.css";

export default ({onClickHandler}) => {
  return (
    <button type="button" onClick={onClickHandler}>
      Add New Expense
    </button>
  );
};
