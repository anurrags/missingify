import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Logout from "./components/logout/logout";
import FormComponent from "./page/form";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/postad" element={<FormComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
