import React from 'react';
import './QuizResult.css';

function QuizResult(props) {
  return (
    <div>
      <div className='result'>
        <h4>Your Score {props.score}</h4>
        <h4>Total Score {props.totalScore}</h4>
      </div>
        <div className='tryButton'>
            <button id='tryAgain' onClick={props.tryAgain}>Try Again</button>
        </div>
    </div>
  )
}

export default QuizResult
