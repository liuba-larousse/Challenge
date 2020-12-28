/** @format */

const express = require('express');
const https = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = 'e0d72a4fa58f166403a644876debed41';
  const units = 'metric';
  const url =
    'http://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    units;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription =
        weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL =
        'http://openweathermap.org/img/wn/' +
        icon +
        '@2x.png';
      res.write(
        '<p>The weather is currently <p>' +
          weatherDescription
      );
      res.write(
        '<h1>The temperature in ' +
          query +
          ' is ' +
          temp +
          ' degrees Celcius.</h1>'
      );
      res.write('<img src=' + imageURL + '>');
      res.send();
    });
  });
});

/*
const query = "London"
const apiKey = "e0d72a4fa58f166403a644876debed41"
const units = "metric"
const url = "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        res.write("<p>The weather is currently <p>" + weatherDescription)
        res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>")
        res.write("<img src=" + imageURL + ">")
        res.send()
    })
})


*/

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
