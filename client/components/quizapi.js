import request from 'superagent'

export default {
  getQ: getQ
}

function getQ (cb) {
  let data = []
  request
    .get('http://www.opentdb.com/api.php?amount=1')
    .end((err, res) => {
      if(!err) {
        data = res.body
        cb(null, data)
      } else {
        cb(err)
      }
    })
}
