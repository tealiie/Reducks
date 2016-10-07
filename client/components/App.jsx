import React from 'react'

import Header from './Header.jsx'
import Image from './Image.jsx'
import Video from './Video.jsx'
import flickrapi from './flickrapi.js'

export default React.createClass({
  componentDidMount () {
    this.getImage()
  },

  getInitialState () {
    return {
      url: ''
    }
  },

  updateState (err, duckImage) {
    this.setState({
      url: this.createImageUrl(duckImage)
    })
  },

  createImageUrl (duckImage) {
    return 'https://farm'+duckImage.farm+'.staticflickr.com/'+duckImage.server+'/'+duckImage.id+'_'+duckImage.secret+'.jpg'
  },

  render() {
    return (
      <div>
        <Header />
        <Image url={this.state.url} getImage={this.getImage} />
        <Video />
      </div>
    )
  },

  getImage () {
    flickrapi.getDucks(this.updateState)
  }
})
