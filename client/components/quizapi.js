import request from 'superagent'

export default {
  getQ: getQ
}

function getQ (cb) {
  let data = []
  request
    .get('https://crossorigin.me/http://www.opentdb.com/api.php?amount=1&type=boolean')
    .end((err, res) => {
      if(!err) {
        data = res.body
        cb(null, data)
      } else {
        cb(err)
      }
    })
}
