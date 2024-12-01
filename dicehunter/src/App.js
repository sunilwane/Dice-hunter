import "./App.css";
import Home from "./Pages/Home"
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="">
      <div>
        <ul className="navlogin">
         <Link to="/"> <li>Home</li></Link>
        <Link to="/login">  <li>Login</li></Link>
        </ul>
      </div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
