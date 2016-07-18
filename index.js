require('dotenv').config()
var request = require('superagent')


//get all the issues from a repo for a specific cohort
var endpoint = 'https://api.github.com'

request
  .get(endpoint + '/user/repos')
  .set('Authorization', 'token ' + process.env.GITHUB_TOKEN)
  .end(function(req, res) {
    console.log(res.body)
  })

//group by label - user / sprint / badge

//render onto some kind of front end / colours
