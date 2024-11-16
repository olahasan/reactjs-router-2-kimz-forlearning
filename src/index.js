import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Ola from './Components/Ola';
import Mona from './Components/Mona';
import Ali from './Components/Ali';
import Lolo from './Components/Lolo';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage /> ,
    children: [
      {index: true, element: <Home />},
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Books',
        element: <div>hello lolo you are very near</div>,
      },
    ]
  },
  {
    path: '/Ola',
    element: <Ola />,
    children:[
      {index: true, element: <div>hi my family i hpoe we are good</div>},
      {
        path: 'mona',
        element: <Mona />,
      },
      {
        path: 'lolo',
        element: <Lolo />,
      },
      {
        path: 'ali',
        element: <Ali />,
      }
    ]
  }


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
