import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import AddactivityPage from './pages/addactivityPage';
import EditActivities from './components/exercise-form/edit-exercise';
import ActivityListPage from './pages/activityListPage';
import Profile from './components/profile';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
      <Router>
        <Navbar />
        <Profile />
        <Routes>
          <Route path="/create" exact element={<AddactivityPage />} />,
          <Route path="edit/:id" element={<EditActivities />} />,
          <Route path="/record" element={<ActivityListPage />} />
        </Routes>
      </Router>
  );
  }
  export default App;
