import React from 'react'
import './Searchbar.css'
//import  SearchIcon from './search-icon.svg'
const Searchbar = () => {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='Search a album of your choice'/>
        <div className='searchicon'>
          <img src="./search-icon.svg" alt="Search-icon" />
        </div>
    </div>
  )
}

export default Searchbar