import React, { useState } from 'react';
import AuthService from '../controllers/auth.controller';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(username, email, password).then(
        (response) => {
          console.log(response);
          navigate('/login');
          window.location.reload();
        },
        (error) => {
          if (error.response) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form class="row g-3 needs-validation" onSubmit={handleSignup} novalidate>
      <div class="col-md-4">
        <label for="validationServer01" class="form-label">
          UserName
        </label>
        <input
          type="text"
          class="form-control"
          id="validationServer01"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        {username.length > 7 && (
          <div id="validationServer01Feedback" class="valid-feedback">
            Looks good!
          </div>
        )}
      </div>
      <div class="col-md-4">
        <label for="validationServer02" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="validationServer02"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationServer03" class="form-label">
          Password
        </label>
        <div class="input-group has-validation">
          <input
            type="password"
            class="form-control"
            id="validationServer03"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">Please choose a Password.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
      {Array.isArray(error) ? (
        error.map((err) => <span class="text-danger">{err}</span>)
      ) : (
        <span class="text-danger">{error}</span>
      )}
    </form>
  );
};

export default Signup;
