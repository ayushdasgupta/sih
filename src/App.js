import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import Login from "./Componets/Login/Login";
import Signin from "./Componets/Signin/Signin";
import { useDispatch, useSelector } from "react-redux";

// import Student_validate from "./Componets/Student_validate/Student_validate";

// import Organisation_generate from "./Componets/Organisation_generate/Organisation_generate";

// import Institute_generate from "./Componets/Institute_generate/Institute_generate";

// import Govt_office_generate from "./Componets/Govt_office_generate/Govt_office_generate";

import Student_dahboard from "./Componets/Student_dashboard/Student_dahboard";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.student);
  
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>} /> 
         <Route path="/login" element={<Login/>} /> 
         <Route path="/signin" element={<Signin/>} /> 
         <Route path="/student/dashboard" element={isAuthenticated ? <Student_dahboard/> : <Signin/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
 