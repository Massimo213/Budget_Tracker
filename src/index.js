import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetProvider } from './Components/context/BudgetsContext';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Contact from './Components/NavBar/Contact';



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
  path:"Contact",
  element:<Contact/>
},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    
    <BudgetProvider>
    <App />
  </BudgetProvider>
  </>
  
);

