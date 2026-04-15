import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Home from './pages/home';
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
