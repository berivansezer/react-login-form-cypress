import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Success from "./Components/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;