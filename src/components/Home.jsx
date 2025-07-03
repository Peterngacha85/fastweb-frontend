import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Fastweb</h2>
      <p>A modern and fast web application built with React</p>
      <div className="cta-buttons">
        <button className="btn primary">
          Get Started <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className="btn secondary">
          Learn More
        </button>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Built with performance in mind</p>
        </div>
        <div className="feature-card">
          <h3>Responsive</h3>
          <p>Works on all devices</p>
        </div>
        <div className="feature-card">
          <h3>Modern</h3>
          <p>Using latest technologies</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
