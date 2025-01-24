import React from 'react';
import './Mainhome.css'; // Custom CSS for styling
import NavMainhome from './NavMainhome';

const Mainhome = () => {
  return (
    <div>
      <NavMainhome/>
      {/* Main Content */}
      <div className="main-home-content">
        <div className="container py-5">
          <h1 className="text-center mb-4">Sustainable Sips: Redefining the Future of Eco-Friendly Living</h1>
          <p className="text-center mb-5">
            Our platform is dedicated to addressing the environmental and health challenges posed by single-use paper cups. Through innovative tools, engaging quizzes, awareness programs, and collaborative solutions, we empower individuals to adopt eco-friendly practices.
          </p>

          {/* Content Boxes */}
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Awareness Classes</h5>
                  <p className="card-text">
                    Participate in classes that teach the importance of reducing single-use plastics and adopting sustainable alternatives.
                  </p>
                  <a href="/awarenessclasses" className="btn btn-success">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Take a Quiz</h5>
                  <p className="card-text">
                    Test your knowledge about the impact of microplastics and sustainable living.
                  </p>
                  <a href="/quiz" className="btn btn-primary">Start Quiz</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Complaints</h5>
                  <p className="card-text">
                    Report issues or suggest improvements to reduce waste and improve campus sustainability efforts.
                  </p>
                  <a href="/complaints" className="btn btn-danger">Submit Complaint</a>
                </div>
              </div>
            </div>

            {/* Additional Ideas */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Eco Challenges</h5>
                  <p className="card-text">
                    Participate in weekly challenges to reduce waste and win eco-points for sustainable actions.
                  </p>
                  <a href="/eco-challenges" className="btn btn-warning">Join Challenges</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Sustainable Cafeteria</h5>
                  <p className="card-text">
                    Explore reusable cups and eco-friendly practices at the campus cafeteria.
                  </p>
                  <a href="/sustainable-cafeteria" className="btn btn-info">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card content-box">
                <div className="card-body">
                  <h5 className="card-title">Volunteer</h5>
                  <p className="card-text">
                    Sign up to become an eco-volunteer and lead sustainability initiatives on campus.
                  </p>
                  <a href="/volunteer" className="btn btn-secondary">Get Involved</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainhome;
