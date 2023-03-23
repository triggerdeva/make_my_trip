import { createContext, useState, useEffect } from 'react';
import Root from './components/Root';
import Tickets from './components/Tickets';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
export const context = createContext();
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path: "/",
        element: <Tickets/>,
      }
    ]
  }
]);
function App() {
  const [data,setData] = useState([]);
  const [formData, setFormData] = useState({
    from : "",
    to : "",
    departure : "",
    return : ""
  })
  const fetchData = async () => {
    const query = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights");
    const data = await query.json();
    console.log(data)
    setData(data);
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <context.Provider value={{data : data, setData : setData}}>
      <RouterProvider router={router} />
    </context.Provider>
  )
}

export default App
