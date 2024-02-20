import React from 'react'
import './Searchbar.css'
//import  SearchIcon from './search-icon.svg'
const Searchbar = () => {
  return (
    <>
      <input
        type="text"
        className="searchbar"
        placeholder="Search an album of your choice"
      />
      <div className="searchicon">
        <img src="./search-icon.svg" alt="Search-icon" />
      </div>
    </>
  );
}

export default Searchbar