import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
import Feedback from '../FeedbackButton/FeedbackButton'
import Logo from '../Logo/Logo';

const Navbar = ({ onFeedbackButtonClick }) => {
    return (
        <div className='navbar'>
            <div className='logo'><Logo/></div>
                <Searchbar />
                <Feedback onFeedbackButtonClick={onFeedbackButtonClick}/>
        </div>
        // <nav>
        //     <Logo/>
        // </nav>
    )
}

export default Navbar