import React, { useContext, useRef, useState } from "react";
import{v4 as uuidV4} from 'uuid';
import useLocalStorage from "../../hook/useLocalStorage";
const BudgersContext = React.createContext();
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"
export function useBudgets() {
  return useContext(BudgersContext);
}
export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets",[]);
  const [expenses, setExpenses] = useLocalStorage("expenses",[]);

  function getBudgetExpenses(budgetId) {
    return expenses.filter(expenses =>expenses.budgetId ===budgetId)
  }
  function addExpense({ description, amount, budgetId }) {
    setExpenses(prevExpenses => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
    })
  }

  function addBudget({ name, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
        return prevBudgets
      }
      return [...prevBudgets, { id: uuidV4(), name, max }]
    })
  

  }
  function deleteBudget({ id }) {
    setExpenses(prevExpenses => {
      return prevExpenses.map(expense => {
        if (expense.budgetId !== id) return expense
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID }
      })
    })

    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => budget.id !== id)
    })
  }
  function deleteExpense({ id }) {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== id)
    })
  }


  return (
    <BudgersContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
    }}
    >
      {children}
      </BudgersContext.Provider>
  );
};
