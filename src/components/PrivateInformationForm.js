// src/components/PrivateInformationForm.js
import React, { useState } from 'react';
import './Form.css';

const PrivateInformationForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    email: '',
    phone: '',
    language: '',
    homeWorkDistance: 0,
    privateCarPlate: '',
    certificateLevel: '',
    fieldOfStudy: '',
    school: '',
    visaNo: '',
    workPermitNo: '',
    visaExpireDate: '',
    workPermitExpireDate: '',
    workPermit: '',
    file: null,
    familyStatus: '',
    maritalStatus: '',
    numberOfDependentChildren: 0,
    emergencyContactName: '',
    emergencyContactPhone: '',
    nationality: '',
    identificationNo: '',
    passportNo: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    countryOfBirth: '',
    nonResident: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch('http://localhost:5000/api/private-info', {
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
      <h2>Private Information</h2>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      {/* Add other fields following the same pattern */}
      <div className="form-group">
        <label>Upload your file:</label>
        <input type="file" name="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PrivateInformationForm;
