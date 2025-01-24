import React, { useState } from 'react';
import './VolunteerSignup.css';

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motivation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for signing up as an eco-volunteer!');
    // You can integrate form submission to the server here
  };

  return (
    <div className="volunteer-signup">
      <h1>Become an Eco-Volunteer</h1>
      <p>Join us in leading sustainability initiatives on campus and make a positive impact on the environment!</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivation">Why do you want to become an eco-volunteer?</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up Now</button>
      </form>

      <h2>Benefits of Being an Eco-Volunteer:</h2>
      <ul>
        <li>Lead sustainability initiatives on campus.</li>
        <li>Gain leadership and community involvement experience.</li>
        <li>Earn eco-points and rewards for participating in eco-friendly activities.</li>
        <li>Make a real impact in promoting sustainability on campus.</li>
      </ul>
    </div>
  );
};

export default VolunteerSignup;
