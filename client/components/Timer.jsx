import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="timerWrapper text-center">
        {this.props.countDown}
      </div>
    )
  }
})
