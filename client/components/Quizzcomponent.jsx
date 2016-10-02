import React from 'react'
import Question from './Question.jsx'
import Timer from './Timer.jsx'
import Answer from './Answer.jsx'
import Newquestion from './Newquestion.jsx'
import ReactCountdownClock from 'react-countdown-clock'

export default React.createClass({
  render() {
    let answer = <Answer showAnswer={this.props.showAnswer} />

    if (this.props.trivia.showingAnswer) {
      answer = <Answer showAnswer={this.props.showAnswer} answer={this.props.trivia.answer}/>
    }

    return (
      <div className="quizzWrapper">
        <Newquestion newQ={this.props.newQ}/>
        <Question question={this.props.trivia.question} />
        <Timer countDown={this.props.countDown} />
        {answer}
      </div>

    )


  }
})
