import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom"
import router from './routers';
import { AlertContext } from './context/AlertContex';
import { AlertReducer } from './reducer/AlertReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [stateAlert, dispatchAlert] = useReducer(AlertReducer, {dataWarning: {}})

  return (
    <React.StrictMode>
      <AlertContext.Provider value={{ stateAlert, dispatchAlert }}>
        <RouterProvider router={router} />
      </AlertContext.Provider>
    </React.StrictMode>
  )
}
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

