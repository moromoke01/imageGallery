import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css"

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(searchTerm);
  // };

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <h3>My Photo Gallery</h3>
        {/* <form onSubmit={handleSearchSubmit} className='search-form'>
          <input
            type='text'
            placeholder='Search by tag'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type='submit'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form> */}
        <span className='nav-item'>
          <Link to='/'>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
