// src/components/ResumeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Resume = () => {
  const [formData, setFormData] = useState({
    workMobile: '',
    workPhone: '',
    workEmail: '',
    department: '',
    jobPosition: '',
    manager: '',
    coach: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/resumes', formData)
      .then(response => alert(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="form-container">
      <h2>Resume Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="workMobile">Work Mobile</label>
          <input type="text" id="workMobile" name="workMobile" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="workPhone">Work Phone</label>
          <input type="text" id="workPhone" name="workPhone" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="workEmail">Work Email</label>
          <input type="email" id="workEmail" name="workEmail" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="jobPosition">Job Position</label>
          <input type="text" id="jobPosition" name="jobPosition" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="manager">Manager</label>
          <input type="text" id="manager" name="manager" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="coach">Coach</label>
          <input type="text" id="coach" name="coach" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Resume;
