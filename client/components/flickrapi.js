import request from 'superagent'

export default {
  getDucks: getDucks
}

function getDucks (cb) {
  let data = []
  request
  .get('xxxxxxxxxx')
  .end((err, res) => {
    if(!err) {
      data = res.body
      cb(null, data)
    } else {
      cb(err)
    }
  })
}
