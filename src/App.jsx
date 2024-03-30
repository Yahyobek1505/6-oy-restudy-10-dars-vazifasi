import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
function App() {
  const naviagate = useNavigate();

  function ProtectedRout({}) {
    
  }
  return (
    
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element = {<Register></Register>}></Route>
      <Route path="*" element = {<Error></Error>}></Route>
    </Routes>
    </>
  );
}

export default App;
