import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
