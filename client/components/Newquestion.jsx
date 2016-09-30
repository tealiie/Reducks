import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="buttonWrapper text-center">
        <button className="btn btn-primary" onClick={this.props.newQ}> new question </button>
      </div>
    )
  }
})
