var express = require('express')
var app = express()
var xhr = require('xhr')

app.use(express.static('client'))

app.get('/', function(req, res){
  res.send('index.html')
})

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err,data){
  if(err) {
    console.log('error', err)
  }
  console.log('this is data', data)

})

app.listen(3000, function(){
  console.log('Taking off on port 3000!')
})
