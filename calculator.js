
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response){

var height = parseFloat(request.body.height);
var weight = parseFloat(request.body.weight);

var resultBMI = weight / (height * height);

  response.send("Your BMI is: " + resultBMI);
});

app.listen(4000, function(){
  console.log("Server started on port 4000.");
});
