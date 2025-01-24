import React from 'react';
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div>
      {/* <Navmain /> */}
      <div className='Home-background'>
        <div className='container1'>
          <div className="container mt-5">
            <div class="card">
              <div class="card-body">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6 text-center">
                    <a href="Admin" className="btn btn-secondary mb-3 w-100">
                      Admin Login
                    </a>
                    <a href="signin" className="btn btn-secondary w-100">
                      User Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
