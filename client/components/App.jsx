import React from 'react'
import quizapi from './quizapi'
import Header from './Header.jsx'
import Quizzcomponent from './Quizzcomponent.jsx'

export default React.createClass({
  getInitialState () {
    return {
      question: "",
      answer: "",
      showingAnswer: false
    }
  },

  componentDidMount () {
    this.getQ()
  },

  getQ () {
    quizapi.getQ(this.renderQ)
  },

  showAnswer () {
    this.setState({
      question: this.state.question,
      answer: this.state.answer,
      showingAnswer: true
    })
  },

  renderQ(err, trivia) {
    console.log(trivia)
    this.setState({
      question: trivia.question,
      answer: trivia.answer,
      showingAnswer: false
    })
  },

  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Quizzcomponent trivia={this.state} showAnswer={this.showAnswer} />
      </div>
    )
  }
})
