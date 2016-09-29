import React from 'react'
import Question from './Question.jsx'
import Timer from './Timer.jsx'
import Answer from './Answer.jsx'
import Newquestion from './Newquestion.jsx'

export default React.createClass({
  render(){
    return(
      <div className="quizzWrapper">
        <Question/>
        <Timer/>
        <Answer/>
        <Newquestion/>
      </div>
    )
  }
})
