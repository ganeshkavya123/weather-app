const addLocationWeather = require('./add-location-weather');
const display = require('./display');
const locationWeather = require('./location-weather');
const locationWeatherHistory = require('./location-weather-history');


module.exports = {
    paths: {
        '/add-weather': {
            ...addLocationWeather
        },
        '/weather-history': {
            ...locationWeatherHistory
        },
        '/location-weather': {
            ...locationWeather
        },
    }
}