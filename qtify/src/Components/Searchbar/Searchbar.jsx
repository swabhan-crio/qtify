import React from 'react'
import './Searchbar.css'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg'
const Searchbar = () => {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='Search a album of your choice'/>
        <button>
            <SearchIcon/>
        </button>
    </div>
  )
}

export default Searchbar