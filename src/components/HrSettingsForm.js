// src/components/HrSettingsForm.js
import React, { useState } from 'react';
import './Form.css';

const HrSettingsForm = () => {
  const [formData, setFormData] = useState({
    status: '',
    employeeType: '',
    pinCode: '',
    relatedUser: '',
    badgeId: '',
    registrationNumber: '',
    jobPosition: '',
    hourlyCost: 0,
    fleetMobilityCard: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch('http://localhost:5000/api/hr-settings', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>HR Settings</h2>
      <div className="form-group">
        <label>Status:</label>
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Employee Type:</label>
        <input type="text" name="employeeType" value={formData.employeeType} onChange={handleChange} />
      </div>
      {/* Add other fields following the same pattern */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HrSettingsForm;
