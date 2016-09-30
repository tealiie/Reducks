import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="timerWrapper text-center">
        <h1> {this.props.countDown} </h1>
      </div>
    )
  }
})
