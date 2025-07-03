import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            <FontAwesomeIcon icon={faInfo} /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
