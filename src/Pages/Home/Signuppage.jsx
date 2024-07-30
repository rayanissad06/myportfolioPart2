import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../redux/authSlice";

const Signuppage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailPattern.test(email)) {
      errors.email = "wrong email";
    }

    if (!isLogin) {
      if (name.length < 5) {
        errors.name = "at least 5 charachters long";
      }

      if (!passwordPattern.test(password)) {
        errors.password = "must be 8 characters long and include at least one number and one special character";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; 
    }

    const userData = {
      name,
      email,
      password,
    };

    if (isLogin) {
      dispatch(login(userData));
    } else {
      dispatch(register(userData));
    }

    navigate("/home");
  };

  return (
    <section id="auth" className="auth-section">
      <div className="background-circles"></div>
      <div className="background-circles"></div>
      <div className="background-circles"></div>
      <div className="auth-container">
        <h2 className="auth-title">{isLogin ? "Login" : "Signup"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <button onClick={toggleAuthMode} className="toggle-button">
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </button>
      </div>
    </section>
  );
};

export default Signuppage;
