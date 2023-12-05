import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Notas from "./Notas";
import Menu from "./Menu";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Menu />
    //     <Route path="/login" component={Login} />
    //     <Route path="/signup" component={SignUp} />
    //     <Route path="/notas" component={Notas} />
    //   </div>
    // </Router>
    <div>
      <p>aaa</p>
      
      <BrowserRouter><Menu />
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
            <Route exact path="/" component={Menu} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/notas" component={Notas} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
