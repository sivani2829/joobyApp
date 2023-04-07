import {Link} from 'react-router-dom'

import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Link to="/" className="link-class">
      <div className="home-container">
        <Header />
        <div className="content-container">
          <div className="text-cont">
            <h1 className="heading-cont">Find The Job That Fits Your Life</h1>
            <p>
              millions of people are searching for jobs,salary information
              reviews.Find the job that fits your abilities and potential.
            </p>
            <Link to="/jobs">
              <button className="find-job-button" type="button">
                Find Jobs
              </button>
            </Link>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
            className="home-clas"
            alt="home page"
          />
        </div>
      </div>
    </Link>
  </>
)
export default Home
