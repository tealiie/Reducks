import React from 'react'
import quizapi from './quizapi'
import Header from './Header.jsx'
import Quizzcomponent from './Quizzcomponent.jsx'

export default React.createClass({
  getInitialState () {
    return {
      trivia: []
    }
  },

  componentDidMount () {
    this.getQ()
  },

  getQ () {
    quizapi.getQ(this.renderQ)
  },

  renderQ(err, trivia) {
    this.setState({
      trivia: trivia.results
    })
  },

  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Quizzcomponent trivia={this.state.trivia}/>
      </div>
    )
  }
})
