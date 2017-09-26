var express = require('express')
var app = express()
var request = require('request')

app.use(express.static('client'))

app.get('/', function(req, res){
  res.send('index.html')
})

request('https://api.wheretheiss.at/v1/satellites/25544', function(error, response){
  if(error) {
    console.log('error', error)
  }
    var results = response;
    console.log(response.body)


})


// app.get('/results', function(req, res){
//   var results = res.body
//   console.log(results)
// })


app.listen(3000, function(){
  console.log('Taking off on port 3000!')
})
