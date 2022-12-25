import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../controllers/auth.controller';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password).then(
        (response) => {
          console.log(response);
          navigate('/welcome');
          window.location.reload();
        },
        (error) => {
          let err = error.response.data;
          console.log(err);
          if (err) {
            setError(err.message);
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fluid">
      <Form noValidate onSubmit={handleLogin} bg-color="primary">
        <h1>Login</h1>
        <Form.Group className="mb-3 w-5" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <span class="text-danger">{error}</span>
    </div>
  );
};

export default Login;
