import React from 'react'
import Header from './Header.jsx'
import Image from './Image.jsx'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Image />
      </div>
    )
    }
  })
//
//   componentDidMount () {
//     this.getQ()
//   },
//
//   init () {
//     const intervalId = setInterval(this.timer, 1000)
//     this.setState({ intervalId: intervalId })
//   },
//
//   timer () {
//     this.setState({ currentCount: this.state.currentCount -1 })
//     if(this.state.currentCount == 0) {
//       clearInterval(this.state.intervalId)
//       this.showAnswer()
//     }
//   },
//
//   getQ () {
//     clearInterval(this.state.intervalId)
//     const intervalId = setInterval(this.timer, 1000)
//     this.setState({ intervalId: intervalId, currentCount: 15 })
//     quizapi.getQ(this.renderQ)
//   },
//
//   showAnswer () {
//     this.setState({
//       question: this.state.question,
//       answer: this.state.answer,
//       showingAnswer: true
//     })
//     clearInterval(this.state.intervalId)
//   },
//
//   renderQ(err, trivia) {
//     console.log(trivia)
//     this.setState({
//       question: trivia.question,
//       answer: trivia.answer,
//       showingAnswer: false
//     })
//   },
//
//   render() {
//     return (
//       <div className="mainWrapper">
//         <Header/>
//         <Quizzcomponent trivia={this.state} showAnswer={this.showAnswer} newQ={this.getQ} countDown={this.state.currentCount}/>
//       </div>
//     )
//   }
// })
