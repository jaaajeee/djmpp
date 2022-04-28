import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import AddactivityPage from './pages/addactivityPage';
import ActivityListPage from './pages/activityListPage';
import Profile from './components/profile';
import SigninPage from './pages/signinPage';
import SignUpPage from './pages/SignUpPage';
import ActivityEditPage from './pages/activityEditPage';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
      <Router>
        <Navbar />
        <Profile />
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create" exact element={<AddactivityPage />} />,
          <Route path="/edit" element={<ActivityEditPage />} />,
          <Route path="/record" element={<ActivityListPage />} />
        </Routes>
      </Router>
  );
  }
  export default App;
