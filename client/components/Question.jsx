import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="questionWrapper text-center">
        <h2> {this.props.question} </h2>
      </div>
    )
  }
})
