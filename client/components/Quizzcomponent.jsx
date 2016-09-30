import React from 'react'
import Question from './Question.jsx'
import Timer from './Timer.jsx'
import Answer from './Answer.jsx'
import Newquestion from './Newquestion.jsx'

export default React.createClass({
  render() {
    let answer = <Answer showAnswer={this.props.showAnswer} />

    if (this.props.trivia.showingAnswer) {
      answer = <Answer showAnswer={this.props.showAnswer} answer={this.props.trivia.answer}/>
    }

    return (
      <div className="quizzWrapper">
        <Question question={this.props.trivia.question} />
        <Timer/>
        {answer}
        <Newquestion newQ={this.props.newQ}/>
      </div>
    )
  }
})
