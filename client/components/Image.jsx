import React from 'react'
import flickrapi from './flickrapi'

export default React.createClass({
  render(){
    return(
      <div className="image">
      <p>Rubber ducky, you're the one!</p>
      <img onClick={this.props.getImage}
        src={this.props.url}/>
      </div>
    )
  }
})
