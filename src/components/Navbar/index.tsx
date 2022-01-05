import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4 className="text-secondary">GitHub API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
