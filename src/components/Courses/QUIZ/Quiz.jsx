import React from 'react'
import { useState } from 'react';
import './Quiz.css'


const Quiz = () => {
    var Questionbank = [
        {
            Question: "Everything in React is a......",
            Answers: [
                { Answer: "Class", isCorrect: false },
                { Answer: "Component", isCorrect: true },
                { Answer: "Package", isCorrect: false },
                { Answer: "Module", isCorrect: false }
            ]
        },
        {
            Question: "In React what is used to pass data to a component from outside?",
            Answers: [
                { Answer: "setState", isCorrect: false },
                { Answer: "PropTypes", isCorrect: false },
                { Answer: "Props", isCorrect: true },
                { Answer: "render with arguments", isCorrect: false }
            ]
        }, {
            Question: "Which of the following is used to render components in web pages ?",
            Answers: [
                { Answer: "DOM_render()", isCorrect: true },
                { Answer: "ReactDOM_render()", isCorrect: false },
                { Answer: "render()", isCorrect: false },
                { Answer: "transfer()", isCorrect: false }
            ]
        },
        {
            Question: "How can you access the state of a component from inside of a member function?",
            Answers: [
                { Answer: "this.getState()", isCorrect: false },
                { Answer: "this.values", isCorrect: true },
                { Answer: " this.state", isCorrect: false },
                { Answer: " this.prototype.stateValue", isCorrect: false }
            ]
        },
        
        
        {
            Question: "......port is the default where the webpack-dev-server will run. ?",
            Answers: [
                { Answer: "8080", isCorrect: false },
                { Answer: "3030", isCorrect: false },
                { Answer: "3000", isCorrect: true },
                { Answer: "3306", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='appp'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz} className="buttonQ">Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}className="buttonQ">{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default Quiz;