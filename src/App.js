import react from"react"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import Login from "./componenets/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard/*" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
