import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="questionWrapper">
        <p className="text-center"> {this.props.question} </p>
      </div>
    )
  }
})
