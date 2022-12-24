import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AuthService from './controllers/auth.controller';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="container-fluid m-2">
      <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
        <div className="navbar-nav mr-auto">
          {currentUser && (
            <li className="nav-item">
              <Link to={'/welcome'} className="nav-link">
                <p class="text-light">welcome</p>
              </Link>
            </li>
          )}
        </div>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/home'} className="nav-link">
              <p class="text-light">Home</p>
            </Link>
          </li>
        </div>

        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                <p class="text-light">Logout</p>
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">
                <p class="text-light">Login</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/signup'} className="nav-link">
                <p class="text-light">Sign Up</p>
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
