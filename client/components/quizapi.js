import request from 'superagent'

export default {
  getQ: getQ
}

function getQ (cb) {
  request
    .get('https://crossorigin.me/http://www.opentdb.com/api.php?amount=1&type=boolean')
    .end((err, res) => {
      if(!err) {
        const trivia = {
          question: res.body.results[0].question,
          answer: res.body.results[0].correct_answer
        }
        cb(null, trivia)
      } else {
        cb(err)
      }
    })
}
