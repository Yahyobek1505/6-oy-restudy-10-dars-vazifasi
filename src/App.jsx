import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const naviagate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
useEffect(() =>{
  if (localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
  }
},[])
function ProtectedRoute({children}) {
  const isAuthenticated = token ? true : false;
  console.log(token);
  console.log(23, isAuthenticated);
    useEffect(() => {
      if (!isAuthenticated) {
        naviagate('/login')
      }
    },[isAuthenticated, naviagate])
    return isAuthenticated ? children : null;
  }
  return (
    
    <>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element = {<Register></Register>}></Route>
      {/* Protected Routes */}

      <Route path="/" element={<ProtectedRoute isAuthenticated ={token ? true : false}><Home></Home></ProtectedRoute>}></Route>
      <Route path="/settings" element={<ProtectedRoute isAuthenticated ={token ? true : false}><Settings></Settings></ProtectedRoute>}></Route>
      <Route path="*" element = {<Error></Error>}></Route>x
    </Routes>
    </>
  );
}

export default App;
