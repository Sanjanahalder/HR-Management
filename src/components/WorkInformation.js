// src/components/WorkInformationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const WorkInformation = () => {
  const [formData, setFormData] = useState({
    workAddress: '',
    workLocation: '',
    approvesExpenses: false,
    approvesTimeOff: false,
    workingHours: '',
    timezone: '',
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/work-info', formData);
    alert('Work information submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Work Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="workAddress">Work Address</label>
          <input type="text" id="workAddress" name="workAddress" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="workLocation">Work Location</label>
          <input type="text" id="workLocation" name="workLocation" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="approvesExpenses" onChange={handleChange} />
            Approves Expenses
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="approvesTimeOff" onChange={handleChange} />
            Approves Time Off
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="workingHours">Working Hours</label>
          <input type="text" id="workingHours" name="workingHours" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <input type="text" id="timezone" name="timezone" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkInformation;
