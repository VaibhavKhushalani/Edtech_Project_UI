import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (input.email === "admin@gmail.com") {
      localStorage.setItem("role", "admin");
    } else if (input.email === "teacher@gmail.com") {
      localStorage.setItem("role", "teacher");
    } else {
      localStorage.setItem("role", "student");
    }
    navigate("/dashboard");
  };
  return (
    <div className="app-main ">
      <Form className="login-box" onSubmit={handleLogin}>
        <h3>Welcome To Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="name@email.com"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="your password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="login-btn">
          <Button variant="outline-dark" type="submit">
            Login
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
