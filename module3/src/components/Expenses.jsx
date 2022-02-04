import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <>
      <div className="expenses">
        {items.map((e) => (
          <ExpenseItem
            id={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </div>
    </>
  );
};

export default Expenses;
