// jshint esversion: 6

const express = require('express');
const bodyParser =require('body-parser');

const app = express();
const port = 3000;

// Body parser
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// BMI 
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', (req, res) => {
    var num1 =Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send(`The result of calculation ${result}`);
});

// BMI
app.post('/bmicalculator', (req, res) => {
    var height =Number(req.body.height);
    var weight = Number(req.body.weight);

    var result = weight / height ** 2;
    var resultBMI = `The result of your BMI is ${result * 10000}`;

    res.send(resultBMI);
});

  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});