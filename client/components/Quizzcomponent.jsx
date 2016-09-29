import React from 'react'
import Question from './Question.jsx'
import Timer from './Timer.jsx'
import Answer from './Answer.jsx'
import Newquestion from './Newquestion.jsx'

export default React.createClass({
  render() {
    return (
      <div className="quizzWrapper">
        {this.props.trivia.map((trivia, i) => {
          return <Question key={i} question={trivia.question}/>
        })}
        <Timer/>
          {this.props.trivia.map((trivia, i) => {
            return <Answer key={i} answer={trivia.correct_answer}/>
          })}
        <Newquestion/>
      </div>
    )
  }
})
