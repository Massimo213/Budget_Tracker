import React, { useContext, useState } from "react"

const BudgersContext= React.createContext()
export function useBudgets(){
return useContext(BudgersContext)
}
export const BudgetProvider = ({children})=>{

  const [budgets,setBudgets]=useState([])
    const [expenses,setExpense]=useState([])
    function getBudgetExpenses(){

    }
    function addExpense(){

    }
    function addBudget(){

    }
    function  deleteBudget(){

    }
    function deleteExpense(){

    }

    return (
  <BudgersContext.Provider value={{
     
  }}>
{children}
  </BudgersContext.Provider>
)
}