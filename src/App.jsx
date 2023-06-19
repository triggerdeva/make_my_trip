import { createContext, useState, useEffect } from 'react';
import Root from './components/Root';
import Home from './components/home';
import Checkout from "./components/checkout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
export const context = createContext();
import './App.css';
import { getObjOfType } from './components/utils/utils';
import LoginSignUp from './components/LoginSignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path: "/flights",
        element: <Home tripType={{type : "flights", options: [{text : "one way", value: "oneWay"},{text : "two way", value: "twoWay"}], lable : "flight type"}}/>,
      },
      {
        path: "/trains",
        element: <Home tripType={{type : "trains", options: [{text : "one way", value: "oneWay"},{text : "two way", value: "twoWay"}], lable : "trip type"}}/>,
      },
      {
        path: "/hotels",
        element: <Home tripType={{type : "hotels", options: [{text : "single room", value: "single"},{text : "double room", value: "doubleroom"}], lable : "room type"}}/>,
      },
      {
        path: "/bookTicket/:ticketPrice",
        element: <Checkout/>,
      }
    ]
  },
  {
    path: "/loginSignup",
    element: <LoginSignUp/>,
  },
]);
function App() {
  const [data,setData] = useState(null);
  const [formData, setFormData] = useState(null)
  const [users,setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    if(users.length !== 0){
      window.localStorage.setItem("users", JSON.stringify(users));
    }
  },[users])
  useEffect(() => {
    if(currentUser){
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
  },[currentUser])
  useEffect(() => {
    let localCurrentUser = window.localStorage.getItem("currentUser");
    if(localCurrentUser){
      setCurrentUser(JSON.parse(localCurrentUser))
    }

    let localUsers = window.localStorage.getItem("users");
    if(localUsers){
      setUsers(JSON.parse(localUsers))
    }
  },[])

  const urls = {
    flights : "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights",
    trains : "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains",
    hotels : "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels",
  }
  const fetchData = async (url) => {
    const query = await fetch(url);
    return query.json();
  }
  useEffect(() => {
    console.log("is fetch data running why?", data)
    if(formData === null) return;
    fetchData(urls[formData.type])
      .then(data => {
        const newData = getObjOfType(formData);
        // setData(data);
        setData([newData,...data]);
      }).catch(error => console.error("some error"));
  },[formData])
  return (
    <context.Provider value={{data, setData,formData, setFormData,setUsers,users,currentUser, setCurrentUser}}>
      <RouterProvider router={router} />
    </context.Provider>
  )
}

export default App

/* 
  trains locaitons 
  delhi 
  mumbai 
  chennai
  kolkata
  ============
  hotel names
  Bhshan Hotels
  Roseate House
  Ginger
  Lemon Tree
  Hotel Snow View Manali
  ============
  airline loacations
  delhi 
  mumbai 
  chennai
  kolkata
*/
