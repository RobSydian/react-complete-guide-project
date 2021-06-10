import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
 
  const dropwdownChangeHandler = (event) => {

    props.onChangeFilter(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropwdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

// Add filter component that allows to use a dropdown and set a filter. 
// Pick a year.
// Listen to changes on that dropdow.
// When the selected value changes, it should be listened. 
// The picked year should be forwarded to the Expenses component.

export default ExpensesFilter;
