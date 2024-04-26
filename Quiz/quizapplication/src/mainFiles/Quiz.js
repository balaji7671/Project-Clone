import React, { useState } from 'react';
import QuizResult from './QuizResult';
import './Quiz.css';

function Quiz() {
  const questions = [
    {
      question: 'What is the capital of Italy?',
      options: ['Berlin', 'London', 'Paris', 'Rome'],
      correctAnswer: 4
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswer: 2
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'CH4'],
      correctAnswer: 1
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Tokyo', 'Seoul', 'Bangkok'],
      correctAnswer: 2
    },
    {
      question: 'What is the symbol for the element Iron?',
      options: ['Fe', 'Au', 'Ag', 'Cu'],
      correctAnswer: 1
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 4
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic reticulum'],
      correctAnswer: 2
    },
    {
      question: 'What is the tallest mammal?',
      options: ['Giraffe', 'Elephant', 'Horse', 'Hippopotamus'],
      correctAnswer: 1
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 1
    }
  ];
  

  const [countQuestion, setcountQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [optionClicked, setOptionClicked] = useState(0);
  const [result, setResult] = useState(false);

  const nextQuestion = () => {
    updateScore();
    if (countQuestion < questions.length - 1) {
      setcountQuestion(countQuestion + 1);
      setOptionClicked(0);
    } else {
      setResult(true);
    }
  };

  const updateScore = () => {
    if (optionClicked === questions[countQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const resetCall = () =>{
    setResult(false);
    setScore(0);
    setcountQuestion(0);
    setOptionClicked(0);
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>Quiz</h1>
      </div>
      {result ? (
        <QuizResult score={score} totalScore={questions.length} tryAgain={resetCall}/>
      ) : (
        <div>
          <div className='main-content'>
            <div className='main'>
              <h4>{countQuestion + 1}. {questions[countQuestion].question}</h4>
              <div className='options'>
                <ul>
                  {questions[countQuestion].options.map((option, i) => {
                    return (
                      <li
                        className={optionClicked === i + 1 ? "checked" : null}
                        key={i}
                        onClick={() => setOptionClicked(i + 1)}>
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='footer'>
            <button id='next' onClick={nextQuestion}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
