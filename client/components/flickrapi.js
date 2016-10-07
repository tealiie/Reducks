import request from 'superagent'

export default {
  getDucks: getDucks
}

function getDucks (cb) {
  const random = getRandom()
  request
  .get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9aaad54f12061e267c3befbd9d2aaf52&tags=ducks%2C+pharrell+williams&sort=relevance&privacy_filter=1&accuracy=1&content_type=1&per_page='+random+'&page=10&format=json&nojsoncallback=1')
  .end((err, res) => {
    if(!err) {
      const photo = res.body.photos.photo[0]
      const duckImage = {
        farm: photo.farm,
        server: photo.server,
        id: photo.id,
        secret: photo.secret
      }
      cb(null, duckImage)
    } else {
      cb(err)
    }
  })
}

function getRandom() {
  return Math.floor(Math.random() * 1000)
}
