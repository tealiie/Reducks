import request from 'superagent'

export default {
  getDucks: getDucks
}

function getDucks (cb) {
  let data = []
  request
  .get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=953c34a58be7b44ad0602c69e7e9965f&tags=ducks&sort=interestingness-desc&privacy_filter=1&accuracy=1&safe_search=1&content_type=1&per_page=1&format=json&nojsoncallback=1&api_sig=55adb4f9dfaf334a3f7666b3bb595498')
  .end((err, res) => {
    if(!err) {
      data = res.body
      cb(null, data)
    } else {
      cb(err)
    }
  })
}
