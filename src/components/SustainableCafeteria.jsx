import React from 'react';
import './SustainableCafeteria.css';

const SustainableCafeteria = () => {
  return (
    <div className="sustainable-cafeteria">
      <h1>Welcome to the Sustainable Cafeteria</h1>
      <p>
        Join us in making the campus cafeteria more eco-friendly! Discover how we are reducing waste and promoting sustainability with reusable cups, eco-friendly packaging, and green practices.
      </p>

      <section className="feature">
        <h2>Reusable Cups and Containers</h2>
        <p>Say goodbye to disposable cups! Bring your own cup or borrow one of our reusable options and help reduce plastic waste.</p>
        <ul>
          <li>Reduces plastic waste.</li>
          <li>Earn discounts for using reusable cups.</li>
          <li>Join the movement today!</li>
        </ul>
      </section>

      <section className="feature">
        <h2>Eco-Friendly Packaging</h2>
        <p>We’ve switched to biodegradable, recyclable, and compostable packaging for all our meals!</p>
        <ul>
          <li>Compostable utensils and containers.</li>
          <li>100% recyclable packaging for takeaways.</li>
        </ul>
      </section>

      <section className="feature">
        <h2>Composting and Waste Management</h2>
        <p>Dispose of food scraps in our composting stations to help turn waste into nutrient-rich compost for campus gardens.</p>
      </section>

      <section className="feature">
        <h2>Discounts for Sustainable Actions</h2>
        <p>Bring your own reusable cup and container to earn discounts!</p>
        <ul>
          <li>10% off drinks with your own cup.</li>
          <li>5% off meals with your reusable container.</li>
        </ul>
      </section>

      <section className="feature">
        <h2>Sustainable Sourcing</h2>
        <p>We use locally sourced, organic ingredients and support plant-based eating for a sustainable future.</p>
      </section>

      <section className="feature">
        <h2>Feedback and Suggestions</h2>
        <p>We want your input! How can we improve our sustainability practices? Share your suggestions with us!</p>
      </section>

      <section className="feature">
        <h2>Earn Eco-Points</h2>
        <p>Earn eco-points for every sustainable choice you make in the cafeteria. Redeem your points for discounts and rewards!</p>
      </section>
    </div>
  );
};

export default SustainableCafeteria;
