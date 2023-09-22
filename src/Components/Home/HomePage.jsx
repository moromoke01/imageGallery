import React from 'react'
import MyGallery from '../gallery/MyGallery';
import Navbar from '../navbar/Navbar';
import { useState } from 'react';

const HomePage = () => {

  // Initialize searchTerm state
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
        {/* Pass handleSearch to the Navbar component */}
      <Navbar onSearch={handleSearch} />
       <MyGallery searchTerm={searchTerm} />    
    </div>
  )
}

export default HomePage
