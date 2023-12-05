import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div>
        <nav className="header-navbar">
          <ul className="header-navbar-list">
            <li className="header-navbar-list-elem">Home</li>
            <li className="header-navbar-list-elem">Bosses</li>
            <li className="header-navbar-list-elem">About</li>
          </ul>
        </nav>
      </div>
      <button className="header-btn" type="button">
        <FontAwesomeIcon className="header-btn-icon" icon={faMagnifyingGlass} />
      </button>
    </header>
  );
}

export default Header;
