var express = require('express')
var app = express()
var request = require('request')

app.use(express.static('client'))

app.get('/', function(req, res){
  res.send('index.html')
})



request('https://api.wheretheiss.at/v1/satellites/25544', function(error, response){
  var result = response.body
  console.log('result', result)
  if(error) {
    console.log('error', error)
}


// app.get('/results', function(req,res){
//    var result = response
//   res.json(result)
// })

})






app.get('/results', function(req,res){
 request('https://api.wheretheiss.at/v1/satellites/25544', function(error, response){

    var result = response.body
    console.log('this is the result...........', result)
    res.send(result.name)

  })
  })


app.listen(3000, function(){
  console.log('Taking off on port 3000!')
})
