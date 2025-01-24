import React, { useState } from 'react';
import './Complaints.css';

const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    name: '',
    email: '',
    complaint: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintData({ ...complaintData, [name]: value });
  };

  const handleImageChange = (e) => {
    setComplaintData({ ...complaintData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaintData.name && complaintData.email && complaintData.complaint) {
      // Handle form submission logic
      alert('Complaint submitted successfully');
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className="complaints-container">
      <h1>Submit Your Complaint</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={complaintData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={complaintData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            name="complaint"
            value={complaintData.complaint}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image (Optional):</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default Complaints;
