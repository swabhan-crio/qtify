import React from 'react'
import './FeedbackButton.css'

const Feedback = ({ onFeedbackButtonClick }) => {
  return (
    <button type='button' className='feedback'>
      {/* <h3 onClick={onFeedbackButtonClick}>Give Feedback</h3> */}
      Give Feedback
    </button>
  );
}

export default Feedback