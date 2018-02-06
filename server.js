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

})


app.get('/results', function(req,res,data){
  // console.log('this is res',res)
  var result = JSON.stringify(data)
  // var yourval = jQuery.parseJSON(JSON.stringify(data));
  // console.log('this is result:',result)
  res.render(result)
})


app.listen(3000, function(){
  console.log('Taking off on port 3000!')
})
