import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;