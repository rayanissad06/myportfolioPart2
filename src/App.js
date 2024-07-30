import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Projectone from "./Pages/Home/Projectone";
import Projecttwo from "./Pages/Home/Projecttwo";
import Homepage from "./Pages/Home/Homepage";
import Testimonialpage from "./Pages/Home/Testimonialpage";
import Contactpage from "./Pages/Home/Contactpage";
import Signuppage from "./Pages/Home/Signuppage";
import PrivateRoute from "./Pages/Home/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="signup" element={<Signuppage />} />
              <Route path="home" element={<PrivateRoute element={<Homepage />} />} />
              <Route path="project_1" element={<PrivateRoute element={<Projectone />} />} />
              <Route path="project_2" element={<PrivateRoute element={<Projecttwo />} />} />
              <Route path="testimonials" element={<PrivateRoute element={<Testimonialpage />} />} />
              <Route path="contact" element={<PrivateRoute element={<Contactpage />} />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
