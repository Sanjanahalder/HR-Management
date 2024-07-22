// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WorkInformationForm from './components/WorkInformation';
import NavBar from './components/NavBar';
import PrivateInformationForm from './components/PrivateInformationForm';
import HrSettingsForm from './components/HrSettingsForm';
import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/work-information" element={<WorkInformationForm />} />
          <Route path="/private-information" element={<PrivateInformationForm />} />
          <Route path="/hr-settings" element={<HrSettingsForm />} />
          <Route path="/" element={<h1>Welcome to the Job Application Portal</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
