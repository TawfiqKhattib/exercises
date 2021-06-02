const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
let urllib = require('urllib');

let CityWeather = require("./City")

let weatherUrl = 'api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&appid=c994f66ae2b701ba018d9120f29ccfdf';

router.get('/city/:cityName', function(req, res) {
    let cityName = req.params.cityName;
    let cityWeatherUrl = weatherUrl + cityName + apiKey;
    const data = urllib.request(cityWeatherUrl, function(err, data, response) {
        if (err) {
            res.send("err"); // you need to handle error
        }
        if (response.statusCode === 404) {
            res.send('');
            return;
        }
        weatherData = JSON.parse(data);
        let cityDta = { name: weatherData.name, temperature: weatherData.main.temp, condition: weatherData.weather[0].main, conditionPic: weatherData.weather[0].description };
        res.send(cityDta);
    })

})

router.get('/cities', async function(req, res) {
    let cityData = await CityWeather.find({});
    res.send(cityData);
})


router.post('/cityPost/', function(req, res) {
    const cityName = req.body;
    let cityWeatherUrl = weatherUrl + Object.keys(req.body)[0] + apiKey;
    const data = urllib.request(cityWeatherUrl, function(err, data, response) {
        if (err) {
            throw err; // you need to handle error
        }
        if (response.statusCode === 404) {
            res.send('');
        }
        weatherData = JSON.parse(data);
        const city = new CityWeather({ name: weatherData.name, temperature: weatherData.main.temp, condition: weatherData.weather[0].main, conditionPic: weatherData.weather[0].description })
        city.save();
        let cityDta = { name: weatherData.name, temperature: weatherData.main.temp, condition: weatherData.weather[0].main, conditionPic: weatherData.weather[0].description };
        // CityWeather.CityWeather.findOneAndUpdate({ name: city.name }, { $set: { temperature: city.temperature, condition: city.condition, conditionPic: city.conditionPic } }, function(err, city) {
        res.send(cityDta);
        // });
    })


})

router.delete("/cityDelet/:cityName", function(req, res) {
    let city = req.params.cityName;
    const removedData = CityWeather.remove({ name: city }, function(err) {
        res.send("city removed")
    })
})
module.exports = router;